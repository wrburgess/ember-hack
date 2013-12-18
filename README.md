# MassTransit Ember Client

## Screens

* Index
* User Auth
* User Show
* User Edit
* Dashboard Index
* Dashboard Show
* Dashboard Edit
* Service Index
* Service Show

## Models

* User
* Dashboard
* Zone
* Service

## Routes

/                       => index
/user/[:id]             => user_show
/user/[:id]/edit        => user_edit
/dashboards             => dashboards_index
/dashboard/[:slug]      => dashboard_show
/dashboard/[:slug]/edit => dashboard_edit
/services               => service_index
/service/[:slug]        => service_show

## Stories

* It allows a user to create an account
* It allows a user to sign in
* It displays a list of dashboards
* It displays a dashboard
* It allows a user to rename a dashboard
* It allows a user to publish/unpublish a dashboard
* It allows a user to share/unshare a dashboard
* It allows a user to add a zone to a dashboard
* It allows a user to re-order zones on a dashboard
* It allows a user to remove a zone from a dashboard
* It allows a user to add services to a zone
* It allows a user to remove services from a zone
* It allows a user to find a service
* It allows a user to edit a service configuration
* It displays a list of services
* It displays a service

## Grunt Setup

For help, visit [Grunt.js: Getting Started](http://gruntjs.com/getting-started)  

Install Grunt

```
npm install grunt@0.4.2 --save-dev
```

Install the Grunt CLI

```
npm install -g grunt-cli
```

Install the npm modules

```
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-haml --save-dev
npm install grunt-contrib-jasmine --save-dev
```