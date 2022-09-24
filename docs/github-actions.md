---
sidebar_position: 300
---

# GitHub Actions (CI Repository)

In CI Repository, workflow files and scripts used in CI are managed.
`gha-trigger` triggers CI Repository's workflows by `workflow_dispatch` API.

## Example

- [Repository](https://github.com/gha-trigger/example-ci)
- [Workflow](https://github.com/gha-trigger/example-ci/blob/main/.github/workflows/test_pull_request.yaml)

## Workflow Dispatch's inputs

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

`data` has the following fields.

- event: [Webhook event payload](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- event_name: event name (e.g. `push`, `pull_request`)
- changed_files: changed files by push or pull_request event
  - [pull_request](https://docs.github.com/en/rest/pulls/pulls#list-pull-requests-files)
  - [push](https://docs.github.com/en/rest/commits/commits#get-a-commit)
  - Note that files are included up to 3000 files due to the GitHub API restriction
- pull_request: [pull request](https://docs.github.com/en/rest/pulls/pulls#get-a-pull-request)

`changed_files` is got only when `paths` filters are used.

e.g.

```yaml
- matches:
    - events:
        - name: pull_request
      paths:
        - type: equal
          value: README.md
```

In case of `pull_request` event, gha-trigger gets a pull request data until `mergeable` becomes not `null` and set the result to `data`'s `pull_request` field.

## Actions for gha-trigger

gha-trigger provides some GitHub Actions.

- [start-action](https://github.com/gha-trigger/start-action)
  - [set-env-action](https://github.com/gha-trigger/set-env-action)
  - [commit-status-action](https://github.com/gha-trigger/commit-status-action)
- [end-action](https://github.com/gha-trigger/end-action)
  - [commit-status-action](https://github.com/gha-trigger/commit-status-action)
- [step-summary-action](https://github.com/gha-trigger/step-summary-action)

gha-trigger's Workflow is different from normal GitHub Actions Workflow, so you have to do some additional tasks.
For example, you have to update commit statuses yourself.

These actions do the common tasks and abstract the difference as much as possible.

- Show how to rerun and cancel workflow in GITHUB_STEP_SUMMARY
- Set useful Environment Variables
- Generate GitHub App Token
- Update commit statuses
- Checkout Main Repository and CI Repository

### How to use Actions

- Add a job for step summary action
- Run `start-action` and `end-action` in GitHub Actions Job

```yaml
jobs:
  gha-trigger-summary:
    runs-on: ubuntu-latest
    steps:
      - uses: gha-trigger/step-summary-action@v0.1.0
        with:
          data: ${{inputs.data}}
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: gha-trigger/start-action@v0.1.6
        id: start
        with:
          data: ${{inputs.data}}
          app_id: ${{secrets.APP_ID}}
          app_private_key: ${{secrets.APP_PRIVATE_KEY}}

      # Add your steps freely

      - uses: gha-trigger/end-action@v0.1.2
        if: always()
        with:
          github_token: ${{steps.start.outputs.github_app_token}}
          state: ${{job.status}}
```

## Use GitHub App instead of `${{ github.token }}`

To access Main Repository, you have to use access token other than `${{ github.token }}`.

[gha-trigger/start-action](https://github.com/gha-trigger/start-action) outputs a GitHub App Token.

```yaml
- uses: gha-trigger/start-action@v0.1.6
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

## Useful environment variables

As we described, to get data from `data` you have to parse `data` with [fromJSON](https://docs.github.com/en/actions/learn-github-actions/expressions#fromjson).

And default environment variables `GITHUB_*` are different from normal GitHub Actions Workflow.

For example, if you want to get the pull request head ref, you can't use the default environment variable `GITHUB_HEAD_REF`.

You can get the pull request head ref as the following, but it is a bit complicated.

```yaml
env:
  HEAD_REF: "${{fromJSON(inputs.data).event.pull_request.head.ref}}"
```

To improve the situation, `start-action` (`set-env-action`) sets useful environment variables.

GitHub Actions doesn't allow to override default environment variables, so `set-env-action` sets environment variables `GHA_*`.

For example, you can get the pull request head ref by the environment variable `GHA_HEAD_REF`.

```yaml
    steps:
      - uses: gha-trigger/start-action@v0.1.6
        id: start
        with:
          data: ${{inputs.data}}
          app_id: ${{secrets.APP_ID}}
          app_private_key: ${{secrets.APP_PRIVATE_KEY}}
      - run: echo "$GHA_HEAD_REF"
```

Please see [the list of environment variables](https://github.com/gha-trigger/set-env-action#set-environment-variables).

### Override default environment variables in `run`

GitHub Actions doesn't allow to override default environment variables, but you can override them in `run`.
`start-action` (`set-env-action`) provides a useful environment variable `GHA_ENV`.

```yaml
- run: |
    echo "$GITHUB_REPOSITORY" # CI Repository
    . "$GHA_ENV" # Overwrite default environment variables GITHUB_*
    echo "$GITHUB_REPOSITORY" # Main Repository
```

## Update commit statuses per workflow

start-action and end-action are run per job, so commit statuses are updated per job by default.
To update commit statuses, these actions call GitHub API so it may cause GitHub API rate limiting.
If you'd like to decrease API call, you can update commit statuses per not job but workflow.
To do so, please do the following things.

- Set the environment variable `GHA_WORKFLOW_COMMIT_STATUS` to `true` in workflow scope
- Set the parameter `start_workflow` to `true` at only one `start-action`
- Run a job to update a commit status at the end of workflow usings [needs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds). You have to pass [needs context](https://docs.github.com/en/actions/learn-github-actions/contexts#needs-context) as an action input

e.g.

```yaml
env:
  GHA_WORKFLOW_COMMIT_STATUS: "true"
jobs:
  foo:
    steps:
      - uses: gha-trigger/start-action@v0.1.6
        id: start
        with:
          # ...
          # commit status is changed to "pending"
          start_workflow: true # set this parameter at only this step
      # ...
      - uses: gha-trigger/end-action@v0.1.2
        # commit status isn't changed
        if: always()
        with:
          github_token: ${{steps.start.outputs.github_app_token}}
  bar:
    steps:
      - uses: gha-trigger/start-action@v0.1.6
        id: start
        with:
          # ...
          # Don't set the parameter `start_workflow`
          # commit status isn't changed
      # ...
      - uses: gha-trigger/end-action@v0.1.2
        if: always()
        # commit status isn't changed
        with:
          github_token: ${{steps.start.outputs.github_app_token}}

  status-check:
    needs: [foo, bar] # Run this job lastly
    if: always()
    steps:
      - uses: gha-trigger/start-action@v0.1.6
        id: start
        with:
          # ...
          # Don't set the parameter `update_commit_status`
          # commit status isn't changed
      - uses: gha-trigger/end-action@v0.1.2
        if: always()
        with:
          github_token: ${{steps.start.outputs.github_app_token}}
          # commit status is updated using `needs.*.result`
          needs: ${{toJson(needs)}}
```

## :bulb: (Optional) Create branches for OIDC

[About security hardening with OpenID Connect](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

GitHub Actions supports OpenID Connect.

If you want to use OIDC and change the permission according to the event, it is useful to create branches in CI Repository for OIDC.

For example, you can create a branch `pull_request` and run GitHub Actions Workflow for pull request with this branch,
and allow those workflows to assume the AWS IAM Role that has read-only permission.
