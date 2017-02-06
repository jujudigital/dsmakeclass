# DS Make Class

A simple Node.js based command-line timesaving utility for scaffolding a DS class file.

## Installation

Download the latest release, unpack and `cd` into the root and then run the following command:

`npm install -g`


## Usage

In the source folder that you want a new class simply call: `dsmakeclass clasName` and it will add a new class based on a structured template.


# Release notes
## Current version
0.1.0

### Fixed/Added in this version
* Initial release

## Change log
-

# Contributing

If you want to make this tool better then please go ahead.

## Preparation
If you've previously installed the utility then run:

`npm remove -g dsmakeclass`

Fork the repo and `cd` into the project root and run:

`npm install -g`

then:

`npm link`

To create a symbolic link to the index.js file in the project. When you save changes they will be free reflected automatically at the global level for testing.

## Clean up

After updating your git repo, remove the development version of the tool:

`npm remove -g dsmakeclass`

Test a clean install of your mods and then create a pull request.

# Todo list
Things that could be implemented in the future:

* Add different templates to support different class structures.
