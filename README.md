# Formula 1 Championship 2016

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.16.0.

## Getting up and running

1. Install `yo`, `grunt-cli`, `bower`, `generator-angular` and `generator-karma`:
```
npm install -g grunt-cli bower yo generator-karma generator-angular
```
2. Run `npm install` and Run `bower install` from the root directory
3. Install `Ruby` and `Compass`, for generating SASS:
- Install Ruby by downloading from [here](http://rubyinstaller.org/downloads/) or use Homebrew
- Install the compass gem:
```
gem install compass
```


## Build & development

Run `grunt` for building and `grunt serve` for preview.


## Running using Apache
```
<VirtualHost *:80>
    ServerAdmin webmaster@day7.local
    DocumentRoot "/var/www/f1-2016/public"
    ServerName f1-championship.local
    ErrorLog "logs/f1-championship.local-error.log"
    CustomLog "logs/f1-championship.local-access.log" common

    <Directory "/var/www/f1-2016/public">
        AllowOverride All 
        Require all granted    
    </Directory>
</VirtualHost>
```
