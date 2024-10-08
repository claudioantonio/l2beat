# Contributing to this repository

🔍 step-by-step guide for creating a Pull Request, using the Milestones as an example -
[link](https://l2beat.notion.site/How-to-add-milestones-to-L2BEAT-0e8684a83c3c48ce8bc7b605d9c9a1bf)

## Don't see your issue? Open one

You can browse [existing issues](https://github.com/l2beat/l2beat/issues) on our github repository.

If you find something wrong with the website or the data feel free to
[open an issue](https://github.com/l2beat/l2beat/issues/new).

## Cloning the repository

We encourage you to fork our repository first and then clone your fork. That way the changes you
make will be visible in your repository after you push and you can easily make pull requests. It's
easy:

https://github.com/l2beat/l2beat/fork

## Installing dependencies

To do any development work, even simple config changes you probably want to have the project running
locally. To install dependencies do the following.

1. Install [node.js](https://nodejs.org/en/) version 18. To easily manage node versions we recommend
   [fnm](https://github.com/Schniz/fnm)
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable), preferably through
   `npm i -g yarn`
3. In the repository root run `yarn` to install project specific dependencies

## Running the website locally

If you're planning working only on the frontend part of the website (i.e. you don't care what data
is actually displayed) then it's quite easy. Just run the following commands after having cloned the
repository:

```
yarn
yarn build:dependencies
cd packages/frontend
yarn dev:mock
```

## Add your Layer 2 project to the website

If you want to add a new Layer 2 project you can do that by opening a PR. To do this you need to:

1. Read the specification in `packages/config/src/projects/layer2s/types/Layer2.ts`. It contains an annotated
   data format for the project definition.
2. Add a .ts file to describe your project inside `packages/config/src/projects/layer2s`. You can use the
   existing projects as reference.
3. Add your project into `packages/config/src/projects/layer2s/index.ts`. The order of the projects should be
   kept alphabetical.
4. Add a square PNG project icon with a minimum size of 128x128 pixels into
   packages/frontend/src/static/icons. From the `packages/frontend` directory
   run `yarn tinify-logos` afterwards to reduce its size.
5. If your project is a fork of an already existing project (like Boba Network that is on top of
   Optimism) or it was built using a Rollups SDK/framework (like ImmutableX that is on top of
   StarkEx) you can show this information by:
   - In your project's .ts file find the field `technology`, add a field `provider` (if it is not
     already) and set the technology provider your project is based on.
   - If the technology provider in which your project is based on is not defined in L2BEAT yet, you
     will need to:
     - Add the new provider in the file `packages/config/src/projects/layer2s/types/Layer2.ts` (find the
       optional property `provider`).
     - Create a simple React component to render the technology provider Icon (SVG format required)
       inside `packages/frontend/src/components/icons/providers`.
     - Import the Icon component created in `packages/frontend/src/components/icons/index.ts`.
     - To finish, add the technology provider icon in the technology column of the project's table
       that is located at `packages/frontend/src/components/table/TechnologyCell.tsx`.
6. Make sure that things like linting, formatting and tests are all passing. To
   check their status you can run `yarn lint:fix`, `yarn format:fix` or `yarn test`
   respectively. We greatly encourage doing this before the last step as it
   shortens the amount of time needed for your project to be added.
7. Open a PR :D
8. If your changes contain any errors we might want to fix them ourselves. To
   make this as easy as possible please enable **"Allow edits by maintainers"**.
   Otherwise the latency before we can merge a PR greatly increases.

Adding a new project in this way will automatically update both the data fetching logic as well as
the frontend.

## Add your Layer 3 project to the website

If you want to add a new Layer 3 project you can do that by opening a PR. To do this you need to:

1. Read the specification in `packages/config/src/projects/layer3s/types/Layer3.ts`. It contains an annotated
   data format for the project definition.
2. Add a .ts file to describe your project inside `packages/config/src/projects/layer3s`. You can use the
   existing projects as reference. Remember to specify host chain on which your project is based on.
   Take `projectId` of host chian and add it to `hostChain` property.
3. Add your project into `packages/config/src/projects/layer3s/index.ts`. The order of the projects should be
   kept alphabetical.
4. Add a square PNG project icon with a minimum size of 128x128 pixels into
   packages/frontend/src/static/icons. From the `packages/frontend` directory
   run `yarn tinify-logos` afterwards to reduce its size.
5. If your project is a fork of an already existing project (like Boba Network that is on top of
   Optimism) or it was built using a Rollups SDK/framework (like ImmutableX that is on top of
   StarkEx) you can show this information by:
   - In your project's .ts file find the field `technology`, add a field `provider` (if it is not
     already) and set the technology provider your project is based on.
6. Make sure that things like linting, formatting and tests are all passing. To
   check their status you can run `yarn lint:fix`, `yarn format:fix` or `yarn test`
   respectively. We greatly encourage doing this before the last step as it
   shortens the amount of time needed for your project to be added.
7. Open a PR :D
8. If your changes contain any errors we might want to fix them ourselves. To
   make this as easy as possible please enable **"Allow edits by maintainers"**.
   Otherwise the latency before we can merge a PR greatly increases.

### Add missing tokens

If while adding your project you find that some of the tokens locked in it are missing from our
token list do not worry.

1. Read the token definition in `packages/config/src/tokens.ts`
2. Check if the token matches the requirements.
3. Add your token to the list. The order of the tokens should be kept alphabetical.

## Contribute research

Each project defined in `packages/config/src/projects` described by a set of parameters
(`details.parameters`). Those values are a result of research conducted by the L2BEAT contributors.
As with all research there may be mistakes, outdated information or missing data in those files.

You are encouraged to provide your feedback on the data presented on L2BEAT by
[opening an issue](https://github.com/l2beat/l2beat/issues/new). Once consensus is reached on what
the data presented should be we also very much welcome PRs.

## Contribute code

The L2BEAT website repository is a monorepo consisting of many interdependent packages. To learn more about each of the projects read their respective README's.
