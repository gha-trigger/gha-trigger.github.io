---
sidebar_position: 1000
---

# Design

## Avoid GitHub API call as much as possible

gha-trigger has to call GitHub API, which has a risk of GitHub API rate limiting.
So gha-trigger avoids GitHub API call as much as possible.

This is a trade off between usability and stability (scalability).

In future, gha-trigger may add options to call GitHub API for usability.

For example, to set GitHub Actions Job URL `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID/jobs/<job id>` to a commit status, gha-trigger has to call GitHub API to get the job ID ([ref](https://stackoverflow.com/questions/71240338/obtain-job-id-from-a-workflow-run-using-contexts)).
To avoid the API call, gha-trigger sets a workflow run URL `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID` instead of the job URL.

Also, to get `GHA_SHA` for some GitHub events such as `release`, gha-trigger has to call GitHub API to get the default branch's commit hash.
To avoid the API call, gha-trigger doesn't set `GHA_SHA` for some GitHub events.
