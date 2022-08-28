---
sidebar_position: 100
---

# Configuration

`gha-trigger` supports only environment variables as source of configuration,
but we are considering other sources such as S3, DynamoDB, AWS AppConfig, and so on.

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
      region: us-east-1
      secret_id: gha-trigger
  - name: ci
    user: suzuki-shunsuke
    app_id: 123456789
    secret:
      type: aws_secretsmanager
      region: us-east-1
      secret_id: gha-trigger
events:
  - matches:
      - repo_owner: suzuki-shunsuke
        repo_name: example-terraform-monorepo-2
        events:
          - pull_request
        branches:
          - main
    workflows:
      - repo_owner: suzuki-shunsuke
        repo_name: example-terraform-monorepo-2-ci
        workflow_file_name: test_pull_request.yaml
        ref: pull_request
        github_app_name: ci
  - matches:
      - repo_owner: suzuki-shunsuke
        repo_name: example-terraform-monorepo-2
        events:
          - push
        branches:
          - main
    workflows:
      - repo_owner: suzuki-shunsuke
        repo_name: example-terraform-monorepo-2-ci
        workflow_file_name: test.yaml
        ref: main
        github_app_name: ci
```

## Secrets for GitHub App

`gha-trigger` requires the following secrets.

- webhook_secret: GitHub App's Webhook Secret
- github_app_private_key: GitHub App's private key
- (optional) app_id: GitHub App ID
- (optional) installation_id: GitHub App Installation ID

`gha-trigger` supports only AWS SecretsManager at the moment.
