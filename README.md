# How pull design tokens from several Specify repositories in GitHub
This example GitHub repository helps you pull design tokens from several Specify repositories.

It contains a GitHub Action that automatically get from Specify potential updates. If your Specify and your GitHub repositoy differ, a new PR will be opened containing your updated design tokens.

## What is pulled from Specify
Our GitHub Action is in the file [`update-design-tokens.yaml`](https://github.com/Specifyapp/monorepo-example/blob/main/.github/workflows/update-design-tokens.yaml).

Let's summarize this workflow:
1. We install the Specify CLI
2. We pull design tokens from several Specify repositories from the same example organization `@acme-inc`: `General`, `Light-Theme` and `Dark-Theme`.
3. We create a Pull Request on a new branch called `specify`

## How to use this repository
### Prerequisites
Please make sure you have:
1. Several source Specify repositories containing your design tokens
2. A Specify Personal Access Token

### How to pull design tokens from Specify
1. Set a new repository secret called `SPECIFY_TOKEN` in your GitHub repository: Settings > Secrects > Actions containing your Specify Personal Access Token
2. Change the Specify repositories called in the [GitHub Action](https://github.com/Specifyapp/monorepo-example/blob/main/.github/workflows/update-design-tokens.yaml#L17-L28)

Don't forget to enable GitHub workflows in your GitHub repository.