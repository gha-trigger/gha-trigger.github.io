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
1. Create GitHub Apps
1. Set up Terraform Configuration
1. Apply Terraform
1. Try to run CI
1. Clean up

### Create GitHub Repositories from template repositories

- Main Repository:
- CI Repository:

### Create Webhook Secret

- https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks

### Create GitHub Apps

- https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app

You have to create three GitHub Apps.

#### 1. GitHub App for receiving webhook and getting data from Main Repository

- Webhook: Active
- Permissions
  - Issues: Read-only
  - Pull requests: Read and write
- Install this App in both Main Repository

#### 2. GitHub App for triggering GitHub Actions Workflow

- Webhook: Inactive
- Permissions
  - Actions: Read and write
- Install this App in CI Repository

#### 3. GitHub App for GitHub Actions Workflow

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
