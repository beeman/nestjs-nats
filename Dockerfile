# Base image
FROM trilon/angular-cli as base

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

# yarn generate-version needs too much files from the workspace which renders the caching above useless
RUN yarn install --network-timeout 1000000 && yarn cache clean

COPY . /workspace
RUN yarn install
RUN yarn build

# Build the the API image
FROM base AS api

COPY --from=base /workspace/node_modules /workspace/node_modules
COPY --from=base /workspace/dist /workspace/dist
COPY --from=base /workspace/package.json /workspace/package.json

CMD yarn start:master:prod
