# vue-ripple-nuxt-drupal-tide-poc (frontend)

> Nuxt.js front end client for POC

- [Prerequisites](#prerequisites)
- [Local environment setup](#local-environment-setup)
- [Development Guide](#development-guide)

## Prerequisites

Please have the *latest* stable versions of the following on your machine

- node 10+
- yarn

## Local environment setup

Rename .env-sample to .env file and change config values for local tide API accordingly:
``` bash
# Tide API
CONTENT_API_SERVER=local-tide-api-host-url e.g. http://127.0.0.1/
CONTENT_API_AUTH_USER=local-tide-admin-username e.g admin
CONTENT_API_AUTH_PASS=local-tide-admin-password
CONTENT_SITE_ID=tide-site-id e.g. 14
```

Above values get read by nuxt.config.js for below environment variables
``` bash
tide: {
    baseUrl: process.env.CONTENT_API_SERVER,
    auth: {
      username: process.env.CONTENT_API_AUTH_USER,
      password: process.env.CONTENT_API_AUTH_PASS
    },
   site: process.env.CONTENT_SITE_ID,
 ```

**Note:**

These environment specific variables needs to be set for the SPA app for Dev, QA, Stagging & Prod, accordingly, as part of the deployment process.

### Run server
While inside the `frontend` folder, please run below commands:

``` bash
# install dependencies
yarn install

# Start the local dev server
yarn run dev
```

Local URL -- [http://localhost:3000](http://localhost:3000)

### Build project
``` bash
yarn run build
```
This will create a deployable version of the SPA App code in the '.nuxt' hidden folder, within 'frontend' folder.

### Lint code

``` bash
# Boolean check if code conforms to linting rules - uses sass-lint, eslint & markdownlint
yarn run lint
```

### Test

``` bash
# Run integration test which checks if the Tide backend is up and a demo landing page can be rendered
yarn test:smoke
```

## Development Guide

Basically, custom dev work only happens in two files:

- [assets/_theme.scss](assets/_theme.scss)
- [assets/_custom.scss](assets/_custom.scss)

For more Ripple document, please check [https://github.com/dpc-sdp/ripple/](https://github.com/dpc-sdp/ripple/blob/production/README.md).

### Custom variables

We are using Ripple pattern library [https://ripple.sdp.vic.gov.au/](https://ripple.sdp.vic.gov.au/) in this project.

You can orveride [Ripple](https://github.com/dpc-sdp/ripple) scss variables in
[assets/_theme.scss](assets/_theme.scss) such as colour.

Currently all scss variables with `!default` in Ripple can be overridden.
We will build a guide of variables in future. But for now, you can check [Ripple packages](https://github.com/dpc-sdp/ripple/blob/master/packages/components) scss files if you want to go deep.

### Custom scss

You can overide styles in [assets/_custom.scss](assets/_custom.scss) by adding any site specific styles.

### Custom static files

For custom images, favicons, analytics JavaScript files, you can replace them in [static](static) directory.
