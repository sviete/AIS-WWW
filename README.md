# AI-Speaker.com Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

``` bash
yarn
```

## Local Development

``` bash
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

``` bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Test

``` bash
npx http-server build -p 3000
```

## Deployment

### AIS dom Server

rsync to staging folder:

``` bash
rsync -e "ssh -p 7777" --delete --progress --stats -ravzh /AIS-WWW/build/ server-user@SERVER-IP:/var/www/ais-www-staging
```

on server:

``` bash
cd /var/www/AIS-WWW
# rm all except apt and audio folder
rm -rf !(apt|audio|ota)
cp -R /var/www/ais-www-staging/* /var/www/AIS-WWW
```

### Update OTA only

1. add files to /static/ota
2. add info to /static/ota/index.html
3. commit & push to GitHub
4. rsync

``` bash
rsync -e "ssh -p 7777" --delete --progress --stats -ravzh /home/andrzej/Projects/AIS-WWW/static/ota/ server-user@SERVER-IP:/var/www/AIS-WWW/ota
```
