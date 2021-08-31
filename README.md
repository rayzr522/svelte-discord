![screenshot](https://media.discordapp.net/attachments/282207139752050688/882055211559043162/unknown.png?width=720&height=522)

# svelte-discord

> A small Svelte app that authenticates with Discord

This is a small app which authenticates with Discord in the browser using an [implicit grant](https://discord.com/developers/docs/topics/oauth2#implicit-grant). The code here isn't particularly high quality and is mainly just a playground for me to mess with Svelte in the context of some "real" data.

## setup

```
# clone the repo
git clone git@github.com:rayzr522/svelte-discord.git

# install dependencies
npm ci

# copy .env.example to .env, don't forget to add your discord oauth2 client ID to this afterwards!
cp .env.example .env

# run the dev server
npm run dev
```
