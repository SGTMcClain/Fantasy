# Fantasy

Fantasy Football App to easily manage multiple Fantasy Football Teams

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## API Keys ##
The API Keys are hidden using the method below

https://gist.github.com/derzorngottes/3b57edc1f996dddcab25

## Recreating Config.js ##
Follow the instructions above to recreate the config.js in the root directory each applications API Keys are stored in the following manner:

### Yahoo API ###

```javascript 
var YAHOO_API = {
  AppID : '123456',
  ClientID : '56789',
  ClientSecret : '101010'
}
```



## YAHOO API NOTES ##
To get a users nfl teams in JSON (to get XML drop "?format=json":

`
https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams?format=json

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
