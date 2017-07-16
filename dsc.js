#!/usr/bin/env node

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');

clear();
console.log(
    chalk.white(
        figlet.textSync('Dark Snow', { horizontalLayout: 'full' })
    )
);

program
    .command('router [name]', 'Generates a Router').alias('r')
    .command('model [name]', 'Generates a Model').alias('m')
    .parse(process.argv);

module.exports = program;