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
1. Run Manual Workflow
1. Clean up

### 1. Create GitHub Repositories from template repositories

- [Main Repository](https://github.com/gha-trigger/example-main/generate)
- [CI Repository](https://github.com/gha-trigger/example-ci/generate)
- [Manual Workflow Repository](https://github.com/gha-trigger/example-manual-workflow/generate)

Please fix code.

#### Create the remote branch `pull_request` in `Main Repository`.

This branch is used to run Workflows via `pull_request` event.

```console
$ git chekout -b pull_request
$ git push origin pull_request
```

### 3. Set up Terraform Configuration

```console
$ git clone https://github.com/gha-trigger/gha-trigger
$ cd gha-trigger/terraform
$ bash download-zip.sh # Download a zip file from Release page
```

Create some filse from templates.

```console
$ cp config.yaml.tmpl config.yaml
$ vi config.yaml

$ cp secret.yaml.tmpl secret.yaml
$ vi secret.yaml

$ cp secret_trigger_workflow.yaml.tmpl secret_trigger_workflow.yaml
$ vi secret.yaml
```

GitHub Apps aren't created yet, so please set dummy strings as GitHub App ID and Private keys at the moment.

### 4. Apply Terraform

Create resources.

```console
$ terraform init
$ terraform validate
$ terraform apply [-refresh=false]
```

`-refresh=false` is useful to make terraform commands fast.

:::caution
Amazon API Gateway is published at the internet and everyone can access it.
`gha-trigger` validates requests so it is dificult for malicious people to run workflows without GitHub Webhook,
but it has a risk of DDos Attack.
We recommend to delete the endpoint soon when the getting started has been finished.
:::

### 5. Create GitHub Apps

Please create GitHub Apps according to [the document](config/github-app).

### 6. Set GitHub App ID and Private Key

- GitHub Repository Secret
  - CI Repository
    - APP_ID: GitHub App ID of `Trigger CI Workflow App`
    - APP_PRIVATE_KEY: GitHub App Private Key of `Trigger CI Workflow App`
  - Manual Workflow Repository
    - APP_ID: GitHub App ID of `Manual Workflow App`
    - APP_PRIVATE_KEY: GitHub App Private Key of `Manual Workflow App`
- config.yaml
  - app_id
- secret.yaml
  - github_app_private_key: GitHub App Private Key of `Webhook App`
- secret_trigger_workflow.yaml
  - github_app_private_key: GitHub App Private Key of `Trigger CI Workflow App`

### 7. Apply Terraform again

After setting GitHub App ID and Private Key, run `terraform apply` again.

```console
$ terraform apply
```

### 8. Run Manual Workflow

You can create a pull request to Main Repository without `Manual Workflow`, but in the getting started let's run `Manual Workflow`.

```console
$ gh workflow run scaffold.yaml -f service=foo
```

Then create a pull request according to the guide in GitHub Actions Step Summary.

CI would work in `CI Repository` via `gha-trigger`.
If CI doesn't work well, please check Lambda Log.

## 10. Clean up

```console
$ terraform destroy
```
