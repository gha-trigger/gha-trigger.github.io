---
sidebar_position: 100
---

# GitHub Apps

https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app

You have to create three or four types of GitHub Apps.

1. `Webhook App`: GitHub App for webhook server to receive webhook and get data from Main Repository
1. `Trigger CI Workflow App`: GitHub App for webhook server to trigger CI Repository GitHub Actions Workflow
1. `CI App`: GitHub App for CI Repository GitHub Actions Workflow to access Main Repository
1. (Optional) `Manual Workflow App`: GitHub App for Manual Workflow Repository to access Main Repository

## 1. Webhook App

GitHub App for webhook server to receive webhook and get data from Main Repository

- Webhook: Active
- Permissions:
  - Issues: Read-only
    - To subscribe Issue comment events
  - Pull requests: Read and write
    - To notify error in webhook server to pull requests
- Subscribe to events
  - Issue comment
    - To support slash command such as `/rerun-workflow`
  - Please subscribe events to trigger workflows
- Repository access
  - Main Repository
    - To receive webhook

:::caution
To subscribe events, you have to set required permissions.
For example, if you'd like to subscribe `push` event, you have to set `Contents: Read-only` permission.
:::

## 2. Trigger CI Workflow App

GitHub App for webhook server to trigger CI Repository GitHub Actions Workflow

- Webhook: Inactive
- Permissions:
  - Actions: Read and write
    - To run GitHub Actions Workflow
- Repository access
  - CI Repository
    - To run GitHub Actions Workflow

## 3. CI App

GitHub App for CI Repository GitHub Actions Workflow to access Main Repository

- Webhook: Inactive
- Permissions:
  - Commit statuses: Read and write
    - To update commit statuses
  - Contents: Read-only
    - To checkout Main Repository
  - Please add permissions for CI
- Repository access
  - Main Repository
    - To access Main Repository in CI
  - CI Repository
    - To issue GitHub App token in CI

## 4. Manual Workflow App

GitHub App for Manual Workflow Repository to access Main Repository

- Webhook: Inactive
- Permissions:
  - Contents: Read-only
    - To checkout Main Repository
  - Please add permissions for CI
- Repository access
  - Main Repository
    - To access Main Repository in CI
  - Manual Workflow Repository
    - To issue GitHub App token in CI
