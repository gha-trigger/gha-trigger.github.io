---
sidebar_position: 200
---

# Configuration

`gha-trigger` supports only environment variables as source of configuration,
but we are considering other sources such as S3, DynamoDB, AWS AppConfig, and so on.

e.g.

```yaml
---
aws:
  region: us-east-1
  secretsmanager:
    region: us-east-1
    secret_id: test-gha-trigger
github_app:
  app_id: 123456789
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
```

## Secrets

`gha-trigger` requires the following secrets.

- webhook_secret: GitHub App's Webhook Secret
- github_app_private_key: GitHub App's private key

`gha-trigger` supports only AWS SecretsManager at the moment.
