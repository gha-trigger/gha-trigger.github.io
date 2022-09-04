---
sidebar_position: 400
---

# Manul Workflow

If you would like to add workflows that users run manually, you have to create a repository for those workflows.
Let's call the repository `Manual Workflow Repository`.
You have to install GitHub App in `Main Repository` and `Manual Workflow Repository` so that workflows can access `Main Repository`.
You also have to give users the write permission of `Manual Workflow Repository`, so you have to be careful the treat of this repository.

One of the usecase of this repository we assume is that users scaffold pull requests of Main Repository.

For example, [tfaction](https://github.com/suzuki-shunsuke/tfaction) provides the feature.

[Scaffold working directory by GitHub Actions workflow_dispatch event](https://suzuki-shunsuke.github.io/tfaction/docs/feature/scaffold-working-dir)

In that case, you can give GitHub App only permission to push commits to `Main Repository`.
If GitHub App can create pull requests to `Main Repository`, a user can approve and merge them himself. This is risky so workflows should create only feature branches in `Main Repository` and let users open pull requests themselves.
