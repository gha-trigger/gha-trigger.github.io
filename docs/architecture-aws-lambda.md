---
sidebar_position: 600
---

# Architecture (AWS Lambda)

![gha-trigger-aws-lambda drawio](https://user-images.githubusercontent.com/13323303/191738470-9c69b79e-89cc-404b-98a4-ab938cf68403.png)

Please see [the example of Terraform Configuration](https://github.com/gha-trigger/example-terraform) too.

GitHub Webhook has a timeout ([ref](https://github.com/orgs/community/discussions/24804#discussioncomment-3245512)).

> GitHub expects that integrations respond within 10 seconds of receiving the webhook payload, as seen in the [docs](https://developer.github.com/v3/guides/best-practices-for-integrators/#favor-asynchronous-work-over-synchronous).

So gha-trigger has to be invoked asynchronouly.

We use Amazon API Gateway to invoke AWS Lambda asynchronously.
We don't use AWS Lambda Function URLs, because this doesn't support invoking AWS Lambda asynchronously.
