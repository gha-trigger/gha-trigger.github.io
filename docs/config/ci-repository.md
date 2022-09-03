---
sidebar_position: 200
---

# CI Repository

## CI Repository's GitHub Actions Workflow

1. Workflow Dispatch's inputs
1. Checkout `CI Repository` and `Main Repository`
1. Use GitHub App instead of `${{ github.token }}`
1. Update commit statuses

e.g.

```yaml
---
name: Format Rego files
on:
  workflow_dispatch:
    inputs:
      data:
        required: true
env:
  PR_NUMBER: ${{fromJSON(inputs.data).event.pull_request.number}}
  MAIN_REPO_NAME: ${{fromJSON(inputs.data).event.repository.name}}
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: debug
        run: echo "$INPUT" | jq
        env:
          INPUT: ${{inputs.data}}

      # Set up job for gha-trigger
      - uses: suzuki-shunsuke/gha-trigger-start-action@main
        id: start
        with:
          data: ${{inputs.data}}
          app_id: ${{secrets.APP_ID}}
          app_private_key: ${{secrets.APP_PRIVATE_KEY}}

      # Run CI as you like
      - name: Add a Pull Request Label
        run: gh pr edit -R "${{env.GHA_REPOSITORY}}" "$PR_NUMBER" --add-label "help wanted"
        env:
          GITHUB_TOKEN: ${{steps.start.outputs.github_app_token}}

      # Lastly, update the commit status per job
      - uses: suzuki-shunsuke/update-commit-status-action@main
        if: always()
        with:
          repo_owner: ${{env.GHA_REPOSITORY_OWNER}}
          repo_name: ${{env.MAIN_REPO_NAME}}
          sha: ${{env.GHA_HEAD_SHA}}
          github_token: ${{steps.start.outputs.github_app_token}}
          state: ${{job.status}}
```

## 1. Workflow Dispatch's inputs

```yaml
on:
  workflow_dispatch:
    inputs:
      data:
        required: true
```

The input `data` is a JSON string.
To get data from `data`, you have to parse `data` with [fromJSON](https://docs.github.com/en/actions/learn-github-actions/expressions#fromjson).

e.g.

```yaml
env:
  PR_NUMBER: ${{fromJSON(inputs.data).event.pull_request.number}}
```

- `${{fromJSON(inputs.data)}}.event`: [Webhook event payload](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- `${{fromJSON(inputs.data)}}.event_name`: event name (e.g. `push`, `pull_request`)

## 2. Checkout `CI Repository` and `Main Repository`

Checkout `CI Repository` and `Main Repository` by [gha-trigger-start-action](https://github.com/suzuki-shunsuke/gha-trigger-start-action).

## 3. Use GitHub App instead of `${{ github.token }}`

To access Main Repository, you have to use access token other than `${{ github.token }}`.

[gha-trigger-start-action](https://github.com/suzuki-shunsuke/gha-trigger-start-action) outputs a GitHub App Token.


```yaml
- uses: suzuki-shunsuke/gha-trigger-start-action@main
  id: start
  with:
    data: ${{inputs.data}}
    app_id: ${{secrets.APP_ID}}
    app_private_key: ${{secrets.APP_PRIVATE_KEY}}

- name: Add a Pull Request Label
  run: gh pr edit -R "${{env.GHA_REPOSITORY}}" "$PR_NUMBER" --add-label "help wanted"
  env:
    GITHUB_TOKEN: ${{steps.start.outputs.github_app_token}} # Use GitHub App Token
```

## 4. Update commit statuses

You have to update a commit status yourself.

[gha-trigger-start-action](https://github.com/suzuki-shunsuke/gha-trigger-start-action) updates a commit status to `pending`.
And lastly, you have to update the commit status according to the job status by [update-commit-status-action](https://github.com/suzuki-shunsuke/update-commit-status-action).


```yaml
# Lastly, update the commit status per job
- uses: suzuki-shunsuke/update-commit-status-action@main
  if: always()
  with:
    repo_owner: ${{env.GHA_REPOSITORY_OWNER}}
    repo_name: ${{env.MAIN_REPO_NAME}}
    sha: ${{env.GHA_HEAD_SHA}}
    github_token: ${{steps.start.outputs.github_app_token}}
    state: ${{job.status}}
```
