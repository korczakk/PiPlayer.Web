# PiPlayerWeb



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Hosting web site on Raspbian

To serve web site you can use NGINX. First you have to install NGINX:

`sudo apt-get install nginx`

To configure NGINX go to `/etc/nginx` and remove content of `sites-enabled` folder. Next create new configuration file in `conf.d` folder (e.g. `my.conf`).
Add following configuration to newly created file:

`server {`
`    listen 80;`
`    location / {`
`        root /var/www/piplayer.web;`
`        index index.html;`
`    }`
`}`

Next build PiPlayer.Web by the following command

`ng build --prod`

and copy content of `dist/PiPlayer.Web` into `/var/www/piplayer.web`.
