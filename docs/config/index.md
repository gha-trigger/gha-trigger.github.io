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
      region: us-east-1
      secret_id: test-gha-trigger-main
  - name: ci
    user: suzuki-shunsuke
    app_id: 123456789
    secret:
      type: aws_secretsmanager
      region: us-east-1
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

## Secrets for GitHub App

`gha-trigger` requires the following secrets.

- webhook_secret: GitHub App's Webhook Secret
- github_app_private_key: GitHub App's private key
- (optional) app_id: GitHub App ID
- (optional) installation_id: GitHub App Installation ID

`gha-trigger` supports only AWS SecretsManager at the moment.
