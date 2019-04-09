# Beckwith Cleverdon Rees Website Generator

The BCR site is built using the Gatsby website generator. Here are some simple
commands that will see you developing and deploying the site in no time:

[![Netlify Status](https://api.netlify.com/api/v1/badges/61aabf4d-7226-4e90-b6b6-1a90bd6ac105/deploy-status)](https://app.netlify.com/sites/bcrlawyers/deploys)

## Developing the site

Gatsby has a built-in development server which is kicked off with:

```sh
yarn develop
```

To make the site available across different IPs, simply add the -H flag:

```sh
yarn develop -H 0.0.0.0
```

The above will make it available to all IPs, but you can change the 0.0.0.0 to
any IP to lock it down to a specific one.

## Deploying the site

The generator is configured to deploy to Netlify. There are two ways to deploy
the site - as a preview, and as production.

**As Preview**
```sh
yarn deploy
```

**As Production**
```sh
yarn ship
```

## Attribution

This site was created by Adam Dickinson
([@adamdickinson](https://github.com/adamdickinson)) of [Renegade
Digital](https://renegade.digital).
