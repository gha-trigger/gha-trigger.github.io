---
sidebar_position: 100
---

# Configuration

`gha-trigger` supports only environment variables as source of configuration,
but we are considering other sources such as GitHub, S3, DynamoDB, AWS AppConfig, and so on.

e.g.

```yaml
---
aws:
  region: us-east-1
github_apps:
  - name: webhook
    user: suzuki-shunsuke
    app_id: 123456789
    secret:
      type: aws_secretsmanager
      secret_id: test-gha-trigger-main
  - name: ci
    user: suzuki-shunsuke
    app_id: 123456789
    secret:
      type: aws_secretsmanager
      secret_id: test-gha-trigger-trigger-workflow
repos:
  - repo_owner: suzuki-shunsuke
    repo_name: test-gha-trigger-main
    workflow_github_app_name: ci
    ci_repo_name: test-gha-trigger-ci
    events:
      - matches:
          - events:
              - name: pull_request
            branches:
              - value: main
                type: equal
        workflow:
          workflow_file_name: test_pull_request.yaml
          ref: pull_request
      - matches:
          - events:
              - name: push
            branches:
              - value: main
                type: equal
        workflow:
          workflow_file_name: test.yaml
          ref: main
```

## `aws`

- `region` (optional): If you create secrets in a different region from Lambda Function, you need to set the region.

## `github_apps`

e.g.

```yaml
github_apps:
  - name: webhook
    user: suzuki-shunsuke
    app_id: 123456789
    secret:
      type: aws_secretsmanager
      region: us-east-1
      secret_id: test-gha-trigger-main
```

`gha-trigger` uses multiple GitHub Apps to receive Webhook and access repositories by GitHub API.
So you have to configure GitHub App ID and App Private Key.

### user, org, installation_id

To get GitHub App access token, you have to configure one of the following settings.

- [user](https://docs.github.com/en/rest/apps/apps#get-a-user-installation-for-the-authenticated-app): GitHub User name where GitHub App is installed
- [org](https://docs.github.com/en/rest/apps/apps#get-an-organization-installation-for-the-authenticated-app): GitHub Organization name where GitHub App is installed
- installation_id: GitHub App Installation ID

### secrets

Private Keys are managed by Secrets Manager, so you have to configure to access Secrets.

```yaml
secret:
  type: aws_secretsmanager
  secret_id: test-gha-trigger-main
  version_id: xxx
```

`gha-trigger` supports only AWS Secrets Manager at the moment, but we are considering other Secrets Manager such as GCP Secrets Manager.

- type: Currently, only `aws_secretsmanager` is supported
- secret_id: AWS SecretsManager's secret id
- version_id: (Optional) AWS SecretsManager's secret version id

### name

`name` is used to identify GitHub App.
This is a `gha-trigger` specific setting, so you can set `name` freely.
`gha-trigger` uses GitHub App to run GitHub Actions Workflow, so `name` is used to specify which GitHub App is used.

e.g.

```yaml
github_apps:
  - name: ci
    # ...
repos:
  - workflow_github_app_name: ci # Use the GitHub App "ci" to run GitHub Actions Workflow for this repository CI
    # ...
```

## repos

`gha-trigger` supports multiple `Main Repository`.

- repo_owner: `Main Repository` owner
- repo_name: `Main Repository` name
- workflow_github_app_name: GitHub App name to run Workflows
- ci_repo_name: `CI Repository` name
- events

## repos[].events

- matches: Webhook filter
- workflow: GitHub Actions Workflow

## repos[].events[].workflow

- workflow_file_name
- ref

## repos[].events[].matches

You can filter webhooks.

- events
- branches
- tags
- paths
- branches-ignore
- tags-ignore
- paths-ignore

If all filters matches the event, workflow is run.

### repos[].events[].matches[].events

e.g.

```yaml
- matches:
    - events:
        # OR condition
        - name: pull_request
        - name: push
```

You can also specify event action.

```yaml
    - events:
        - name: pull_request
          types:
            - opened
```

### branches, tags, paths, branches-ignore, tags-ignore, paths-ignore

e.g.

```yaml
- matches:
    - branches:
        - value: main
          type: equal
```

Supported types

- equal
- [contain](https://pkg.go.dev/strings#Contains)
- [regexp](https://pkg.go.dev/regexp#Regexp.MatchString)
- [prefix](https://pkg.go.dev/strings#HasPrefix)
- [suffix](https://pkg.go.dev/strings#HasSuffix)
- [glob](https://pkg.go.dev/path#Match)

## Secrets for GitHub App

`gha-trigger` requires the following secrets.

- webhook_secret: GitHub App's Webhook Secret
- github_app_private_key: GitHub App's private key
- (optional) app_id: GitHub App ID
- (optional) installation_id: GitHub App Installation ID

`gha-trigger` supports only AWS SecretsManager at the moment.
