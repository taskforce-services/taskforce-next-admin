# Taskforce Next.js Admin

![Github Pages](https://github.com/taskforce-services/taskforce-next-admin/actions/workflows/deploy.yml/badge.svg)

This repo is a Next.js static app deployed to Github Pages via Github Actions when upstream/main is pushed.

- **[View the deployed app](https://taskforce-services.github.io/taskforce-next-admin/)**
- **[Read the blog post](https://gregrickaby.blog/article/nextjs-github-pages)**

You can fork this repo and follow the instructions in the blog above to publish your fork via Github Pages
for testing. When you are happy with the results, you can create a PR to merge the fork into the main repo.

## Creating Secrets

For environment variables that should be added to the package during `npm build`, run `base64 .env.production | pbcopy`
and create a github environment secret named `ENVIRONMENT` with a value of this pasted base64 string. The github
workflow action is configured to use this secret at build time.
