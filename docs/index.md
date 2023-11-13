---
sidebar_position: 1
---

# gha-trigger

[![License](http://img.shields.io/badge/license-mit-blue.svg?style=flat-square)](https://raw.githubusercontent.com/gha-trigger/gha-triggger/main/LICENSE)

https://github.com/gha-trigger/gha-trigger

Webhook Server for Secure GitHub Actions

## :warning: Deprecated. Please use `pull_request_target` instead

[Secure GitHub Actions by pull_request_target](https://dev.to/suzukishunsuke/secure-github-actions-by-pullrequesttarget-641)

## Goal

Run GitHub Actions Workflow securely.
Prevent GitHub Actions Workflow from being modified and running malicious commands.

## Background

GitHub Actions is very powerful CI Platform, but also has a security risk that someone modifies workflow and CI scripts and run malicious commands.
For example, secrets with strong permission may be abused and stolen.

GitHub provides several features such as [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners), [branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule), [OIDC Support](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect), and so on, but they can't solve the above threat perfectly.

You can use other CI Platform to prevent workflows from being modified, but we would like to use GitHub Actions because GitHub Actions is very powerful.

So we design the architecture and develop gha-trigger to achieve the above goal.

## Architecture

![gha-trigger drawio](https://user-images.githubusercontent.com/13323303/188292546-53f0b4d2-fbe6-4bec-8b28-1b635b5e2eb0.png)

You create two GitHub repositories.

- Main Repository
  - Users develop this repository
  - Disable GitHub Actions
- CI Repository
  - Manage GitHub Actions Workflows and CI scripts
  - Only CI maintainers have write permissiono and other users have only read permission

When events such as `push` and `pull_request` occur in Main Repository, the webhook is sent to `gha-trigger`.
`gha-trigger` validates and filters webhooks and triggers GitHub Actions Workflows of CI Repository via GitHub API.
Workflows of CI Repository update commit statuses of Main Repository and send pull request comments so that users can refer CI results from Main Repository's pull request pages.

The important thing is that workflows and CI scripts are managed at the repository other than `Main Repository` and only restricted people have the write permission of `CI Repository`.
This prevents users from modifying workflows and CI scripts and makes GitHub Actions secure.

`gha-trigger` supports multiple pairs of `Main Repository` and `CI Repository`.
You can also share `CI Repository` for multiple `Main Repository`.

## How to rerun and cancel CI

Users don't have the write permission of CI Repository, so they can't rerun and cancel workflows directly.
But they can rerun and cancel workflows via pull request comments.

![image](https://user-images.githubusercontent.com/13323303/187913667-8019683a-6556-40f7-9f5e-c58adbb42025.png)

- Rerun workflows: `/rerun-workflow <workflow run id> [<workflow run id> ...]`
- Rerun failed jobs: `/rerun-failed-jobs <workflow run id> [<workflow run id> ...]`
- Cancel workflows: `/cancel <workflow run id> [<workflow run id> ...]`

`gha-trigger` guides commands by [$GITHUB_STEP_SUMMARY](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary).

e.g.

![image](https://user-images.githubusercontent.com/13323303/187903524-260b805c-5d02-4e29-ad14-8a4320f28071.png)

## How to trigger workflows manually

If you would like to add workflows that users run manually, you have to create a repository for those workflows.

For detail, please see [Manual Workflow](manual-workflow.md).

## GitHub Actions

We provide some GitHub Actions for gha-trigger.
Please see [GitHub Actions](github-actions.md).

## Supported Platforms

gha-trigger supports only AWS Lambda at the moment,
but we're considering to support other platform such as Google Cloud Function too.

## Supported Events

gha-trigger aims to support [all events that GitHub Actions supports](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows).

For detail, please see [Supported Events](events.md).

## Pros and Cons

### Pros

The pros of `gha-trigger` is that you can run GitHub Actions securely.
You can prevent GitHub Actions Workflow from being modifying and running malicious commands.

### Cons

Compared with normal GitHub Actions usage, `gha-trigger` has some drawbacks.

- `github.token` of `CI Repository` can't be used to access `Main Repository`
  - [ref. Use GitHub App instead of ${{ github.token }}](github-actions#use-github-app-instead-of--githubtoken-)
- You have to fix workfows to migrate existing workflows to `gha-trigger`
- [Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts) and [Default environment variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) are different from original event
  - [`gha-trigger` passes the event payload to Workflow as input](github-actions.md#workflow-dispatchs-inputs)
  - [ref: Useful environment variables](github-actions.md#useful-environment-variables)
- `gha-trigger` uses not Checks API but Commit Status API
- `gha-trigger` calls GitHub API so it has a risk of GitHub API rate limit issue
  - [ref: Update commit statuses per workflow](github-actions.md#update-commit-statuses-per-workflow)
- The experience for rerunning and canceling CI is a little bad
  - [ref. How to rerun and cancel CI](#how-to-rerun-and-cancel-ci)
- 💰 It spends money
  - gha-trigger uses AWS resources such as Lambda
- You have to set up and maintain `gha-trigger`
  - Continous update
  - Monitoring
  - Trouble shooting

## Release Notes

Please see each repository's GitHub Releases.

- https://github.com/orgs/gha-trigger/repositories
- [gha-trigger/gha-trigger](https://github.com/gha-trigger/gha-trigger/releases)

## LICENSE

[MIT](https://raw.githubusercontent.com/gha-trigger/gha-triggger/main/LICENSE)
