const program = require('./dsc.js');

const fs = require('fs');
const chalk = require('chalk');
const mkdirp = require('mkdirp');

const folder = './models';
const extention = ".model.js";
const template = "/model.template.js";
const source = "/templates"
program.action((name) => {
    if (name) {
        mkdirp(folder, function (err) {
            if (err) {
                throw "Could Not Create Routes Folder";
            }
            let file = fs.readFileSync(__dirname + source + template, 'utf8');
            let final = file.replace("__LADY__", name);
            fs.writeFileSync(folder + "/" + name + extention, final);
            console.log(
                chalk.green("Model" + folder + "/" + name + extention + " have been generated!")
            );
        });
    } else {
        console.log(
            chalk.red("Please enter a file name")
        );
    }
})
    .parse(process.argv);
