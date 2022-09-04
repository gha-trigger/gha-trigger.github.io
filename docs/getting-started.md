---
sidebar_position: 100
---

# Getting Started

In the Getting Started, you will set up gha-trigger and experience CI with gha-trigger.

## Requirement

- Git
- GitHub Account
- AWS Account
- [Terraform](https://www.terraform.io/)

## Steps

1. Create GitHub Repositories from template repositories
1. [Create Webhook Secret](https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks)
1. Set up Terraform Configuration
1. Apply Terraform
1. Create GitHub Apps
1. Set GitHub App ID and Private Key
1. Apply Terraform again
1. Run CI
1. Run Manual Workflow
1. Clean up

### 1. Create GitHub Repositories from template repositories

- [Main Repository](https://github.com/gha-trigger/example-main/generate)
- [CI Repository](https://github.com/gha-trigger/example-ci/generate)
- [Manual Workflow Repository](https://github.com/gha-trigger/example-manual-workflow/generate)

Please fix code.

### 3. Set up Terraform Configuration

```console
$ git clone https://github.com/gha-trigger/gha-trigger
$ cd gha-trigger/terraform
$ bash download-zip.sh # Download a zip file from Release page
```

Create `config.yaml`, `secret.yaml`, and `terraform.tfvars` from templates.

```console
$ cp config.yaml.tmpl config.yaml
$ vi config.yaml

$ cp secret.yaml.tmpl secret.yaml
$ vi secret.yaml

$ cp terraform.tfvars.tmpl terraform.tfvars
$ vi terraform.tfvars
```

GitHub Apps aren't created yet, so please set dummy string as GitHub App private keys at the moment.

### 4. Apply Terraform

Create resources.

```console
$ terraform apply [-refresh=false]
```

`-refresh=false` is useful to make terraform commands fast.

### 5. Create GitHub Apps

Please create GitHub Apps according to [the document](config/github-app).

### 6. Set GitHub App ID and Private Key

### 7. Apply Terraform again

### 8. Run CI

Create a pull request to source repository to test CI.

### 9. Run Manual Workflow

## 10. Clean up

```console
$ terraform destroy
```
