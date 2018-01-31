# sassbootstrap
Demo solution for testing SASS bootstrap

This project imports the bootstrap-sass NPM package and override default bootstrap properties on build rather than having an extra CSS file to override the default values.

## Installation

Clone this repository, then run npm install to pull down the dependencies.

## Building

You should now be able to run the default gulp task to compile your sass files. 

```sh

```

By default this will clean and minify your css, you can override this by calling gulp with the debug flag, like follows

```sh
gulp --debug
```

The compiled css file will be outputted into the dist directory

## Viewing the output

If you're only interested in compiling the bootstrap sass, you only need to be concern yourself with the gulp 'sass' task. The other tasks are there to support the HTML preview of your custom bootstrap file
