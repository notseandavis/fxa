#!/bin/bash -ex

DIR=$(dirname "$0")

cd "$DIR/../../../"

mkdir -p ~/.pm2/logs
mkdir -p artifacts/tests

#npx playwright install --with-deps

node ./packages/db-migrations/bin/patcher.mjs

yarn workspaces foreach \
    --verbose \
    --topological-dev \
    --include 123done \
    --include browserid-verifier \
    --include fxa-auth-server \
    --include fxa-content-server \
    --include fxa-graphql-api \
    --include fxa-payments-server \
    --include fxa-profile-server \
    --include fxa-react \
    --include fxa-settings \
    --include fxa-shared \
    run start > ~/.pm2/logs/startup.log

npx pm2 ls

cd packages/functional-tests/tests
circleci tests glob "/tests/**/*.spec.ts" | circleci tests split > tests-to-run.txt
yarn workspace functional-tests test --grep $(cat tests-to-run.txt)
echo "start troubleshooting"
pwd
ls -lrt
cat tests-to-run.txt
echo "done troubleshooting"
