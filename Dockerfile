FROM cypress/include:lastest

WORKDIR /app

COPY package.json /app
COPY tsconfig.json /app
COPY cypress.config.ts /app

COPY cypress /app/cypress

RUN yarn install

CMD ["yarn", "cypress", "run", "--config", "video=false", "--spec", "cypress/e2e/*.cy.ts" ]