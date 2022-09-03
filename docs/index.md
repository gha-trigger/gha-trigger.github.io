---
sidebar_position: 1
---

# gha-trigger

[![License](http://img.shields.io/badge/license-mit-blue.svg?style=flat-square)](https://raw.githubusercontent.com/gha-trigger/gha-triggger/main/LICENSE)

https://github.com/gha-trigger/gha-triggger

Webhook Server for Secure GitHub Actions

## Status

:::caution
Under development. This doesn't work yet.
We aim to release v0.1.0 in September 2022.
:::

## Goal

Run GitHub Actions Workflow securely.
Prevent GitHub Actions Workflow from being modifying and running malicious commands.

## Background

GitHub Actions is very powerful CI Platform, but also has a security risk that someone modifies workflow and CI scripts and run malicious commands.
For example, secrets with strong permission may be abused and stolen.

You can use other CI Platform to prevent workflows from being modifying, but we would like to use GitHub Actions because GitHub Actions is very powerful.

So we design the architecture and develop GitHub App to achieve the above goal.

## Architecture

![gha-trigger architecture](https://user-images.githubusercontent.com/13323303/186283702-cb3d7de1-6bb0-45dc-8387-d251068484a1.png)

You create two GitHub repositories.

- Main Repository
  - Users develop this repository
  - Disable GitHub Actions
- CI Repository
  - Manage GitHub Actions Workflows and CI scripts
  - Only CI maintainers have write permissiono and other users have only read permission

And you create some GitHub Apps.

- GitHub App for Webhook Server
  - GitHub App for receiving webhook and getting data from Main Repository
  - GitHub App for triggering GitHub Actions Workflow
- GitHub App for GitHub Actions Workflow
  - GitHub App used in CI Repository's GitHub Actions Workflow
    - Access Main and CI Repository
    - Update commit statuses

When events such as `push` and `pull_request` occur in Main Repository, the webhook is sent to `gha-trigger`.
`gha-trigger` validates and filters webhooks and triggers GitHub Actions Workflows of CI Repository via GitHub API.
Workflows of CI Repository update commit statuses of Main Repository and send pull request comments so that users can refer CI results from Main Repository's pull request pages.

The important thing is that workflows and CI scripts are managed at the repository other than `Main Repository` and only restricted people have the write permission of `CI Repository`.
This prevents users from modifying workflows and CI scripts and makes GitHub Actions secure.

## Supported runtime

gha-trigger supports only AWS Lambda at the moment,
but we're considering to support other platform such as Google Cloud Function too.

## How to rerun and cancel CI

Users don't have the write permission of CI Repository, so they can't rerun and cancel workflows directly.
But they can rerun and cancel workflows via pull request comments.

![image](https://user-images.githubusercontent.com/13323303/187913667-8019683a-6556-40f7-9f5e-c58adbb42025.png)

- Rerun workflows: `/rerun-workflow <workflow id> [<workflow id> ...]`
- Rerun failed jobs: `/rerun-failed-jobs <workflow id> [<workflow id> ...]`
- Cancel workflows: `/cancel <workflow id> [<workflow id> ...]`

:::caution
`/rerun-job` isn't supported for now. [#54](https://github.com/gha-trigger/gha-trigger/issues/54)
:::

`gha-trigger` guides commands by [$GITHUB_STEP_SUMMARY](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary).

e.g.

![image](https://user-images.githubusercontent.com/13323303/187903524-260b805c-5d02-4e29-ad14-8a4320f28071.png)

## How to trigger workflows manually

If you would like to add workflows that users run manually, you have to create a repository for those workflows.
Let's call the repository `Manual Trigger Repository`.
You have to install GitHub App in `Main Repository` and `Manual Trigger Repository` so that workflows can access `Main Repository`.
You also have to give users the write permission of `Manual Trigger Repository`, so you have to be careful the treat of this repository.

One of the usecase of this repository we assume is that users scaffold pull requests of Main Repository.

For example, [tfaction](https://github.com/suzuki-shunsuke/tfaction) provides the feature.

[Scaffold working directory by GitHub Actions workflow_dispatch event](https://suzuki-shunsuke.github.io/tfaction/docs/feature/scaffold-working-dir)

In that case, you can give GitHub App only permission to push commits to `Main Repository`.
If GitHub App can create pull requests to `Main Repository`, a user can approve and merge them himself. This is risky so workflows should create only feature branches in `Main Repository` and let users open pull requests themselves.

## GitHub Actions

We provide some GitHub Actions for gha-trigger.
Please see [GitHub Actions](github-actions).

## Pros and Cons

### Pros

The pros of `gha-trigger` is that you can run GitHub Actions securely.
You can prevent GitHub Actions Workflow from being modifying and running malicious commands.

### Cons

Compared with normal GitHub Actions usage, `gha-trigger` has some drawbacks.

- `github.token` of `CI Repository` can't be used to access `Main Repository`
- You have to fix workfows to migrate existing workflows to `gha-trigger`
- [Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts) and [Default environment variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) are different from original event
  - `gha-trigger` passes the event payload to Workflow as input
- `gha-trigger` uses not Checks API but Commit Status API
- `gha-trigger` calls GitHub API so it has a risk of GitHub API rate limit issue
- The experience for rerunning and canceling CI is a little bad
- It spends money
- You have to set up and maintain `gha-trigger`
  - Continous update
  - Monitoring
  - Trouble shooting

## LICENSE

[MIT](https://raw.githubusercontent.com/gha-trigger/gha-triggger/main/LICENSE)
