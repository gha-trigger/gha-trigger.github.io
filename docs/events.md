---
sidebar_position: 400
---

# Supported Events

gha-trigger aims to support [all events that GitHub Actions supports](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows).

## `pull_request_target`

GitHub Actions supports `pull_request_target`,
but GitHub Webhook doesn't support it.
You can use `pull_request` instead of `pull_request_target`.

GitHub Actions `pull_request_target` has the following features compared with `pull_request`.

- secrets can be accessed
- default branch workflow is used, which is important to prevent workflow file from being modified

gha-trigger supports these features.

- gha-trigger triggers workflows by workflow_dispatch event, so CI Repository's secrets can be accessed
- gha-trigger manages the workflow ref in the configuration file and manages workflow files and CI scripts in CI Repository, which prevents them from being modified
