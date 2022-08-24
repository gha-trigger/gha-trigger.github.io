---
sidebar_position: 200
---

# CI Repository

## CI Repository's GitHub Actions Workflow

- Workflow Dispatch's inputs
- Checkout `CI Repository` and `Main Repository`
- Use GitHub App instead of `${{ github.token }}`
- Update commit statuses

```yaml
---
name: Format Rego files
on:
  workflow_dispatch:
    inputs:
      # payload:
      #   required: true
      repo:
        required: true
      ref:
        required: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@v1
        with:
          app_id: ${{ secrets.APP_ID }}
          private_key: ${{ secrets.APP_PRIVATE_KEY }}
      - uses: actions/checkout@v3
        with:
          repository: ${{ github.event.inputs.repo }}
          ref: ${{ github.event.inputs.ref }}
          token: ${{ steps.generate_token.outputs.token }}
      - uses: actions/checkout@v2
        with:
          path: .test-isolation

      - uses: ./.test-isolation/.github/actions/aqua
      - uses: suzuki-shunsuke/github-action-opa-fmt@v0.1.0
        with:
          github_token: ${{ steps.generate_token.outputs.token }}
```

## Workflow Dispatch's inputs

```yaml
on:
  workflow_dispatch:
    inputs:
      # payload:
      #   required: true
      repo:
        required: true
      ref:
        required: true
```

- repo:
- payload:

## Checkout `CI Repository` and `Main Repository`

```yaml
- uses: actions/checkout@v3
  with:
    repository: ${{ github.event.inputs.repo }}
    ref: ${{ github.event.inputs.ref }}
    token: ${{ steps.generate_token.outputs.token }}
- uses: actions/checkout@v2
  with:
    path: .test-isolation
```

## Use GitHub App instead of `${{ github.token }}`

https://github.com/tibdex/github-app-token

```yaml
- name: Generate token
  id: generate_token
  uses: tibdex/github-app-token@v1
  with:
    app_id: ${{ secrets.APP_ID }}
    private_key: ${{ secrets.APP_PRIVATE_KEY }}
- uses: actions/checkout@v3
  with:
    repository: ${{ github.event.inputs.repo }}
    ref: ${{ github.event.inputs.ref }}
    token: ${{ steps.generate_token.outputs.token }}
```

## Update commit statuses

https://github.com/suzuki-shunsuke/update-commit-status-action
