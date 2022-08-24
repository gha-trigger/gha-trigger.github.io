---
sidebar_position: 100
---

# Getting Started

In the Getting Started, you can set up gha-trigger and experience CI with gha-trigger.

## Requirement

- Git
- Terraform
- GitHub Account
- AWS Account

## Steps

1. Create GitHub Repositories from template repositories
1. Create Webhook Secret
1. Create GitHub App(s)
1. Set up Terraform Configuration
1. Apply Terraform
1. Try to run CI
1. Clean up

### Create GitHub Repositories from template repositories

- Main Repository:
- CI Repository:

### Create Webhook Secret

- https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks

### Create GitHub App(s)

- https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app

You have to create GitHub App for two purposes.

1. Receive webhook and trigger GitHub Actions Workflow
2. Access Main Repository in CI of CI Repository

You can use one GitHub App for the above purposes or can create two GitHub Apps for each purpose.

You have to install GitHub App in Main Repository and CI Repository.
You can either use the same GitHub App or create GitHub Apps per repository.

In this Getting Started, let's use the same GitHub App for simplicity.

#### 1. Receive webhook and trigger GitHub Actions Workflow

The minimum setting of GitHub App (1).

- Webhook: Active
- Permissions
  - Actions: Read and write
  - Issues: Read-only
  - Pull requests: Read and write
- Install this App in both Main Repository and CI Repository

#### 2. Receive webhook and trigger GitHub Actions Workflow

The minimum setting of GitHub App (2).

- Webhook: Inactive
- Permissions
  - Commit statuses: Read and write
  - Contents: Read
- Install this App in both Main Repository and CI Repository
- Register GitHub App ID and Private Key as CI Repository's GitHub Secrets

### Set up Terraform Configuration

```console
$ git clone https://github.com/suzuki-shunsuke/gha-trigger
$ cd gha-trigger/terraform
```

[Download a zip file from Release page](https://github.com/suzuki-shunsuke/gha-trigger/releases) on this directory.

Create `config.yaml`, `secret.yaml`, and `terraform.tfvars` from templates.

```console
$ cp config.yaml.tmpl config.yaml
$ vi config.yaml

$ cp secret.yaml.tmpl secret.yaml
$ vi secret.yaml

$ cp terraform.tfvars.tmpl terraform.tfvars
$ vi terraform.tfvars
```

### Apply Terraform

Create resources.

```console
$ terraform apply [-refresh=false]
```

`-refresh=false` is useful to make terraform commands fast.

### Try

Create a pull request to source repository to test CI.

## Clean up

```
$ terraform destroy
```
