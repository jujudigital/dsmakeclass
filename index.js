#!/usr/bin/env node
var program = require('commander');

function createTemplate(className){
  className = className || "";
  console.log('Made:  %s', className);

  var outFile = "./" + className + ".js";

  var fs = require('fs');

  fs.readFile(__dirname+'/templates/classtemplate.js', 'utf8', function(err, data){
    if ( err ) {
      return console.log(err);
    }
    var result = data.replace(/{ClassName}/g, className);

    fs.writeFile(outFile, result, 'utf8', function(err){
      if ( err ) return console.log(err);
    });

  });
}


// Execute script
program
  .arguments('<className>')
  .action(function(className){
    createTemplate(className);
  })
  .parse(process.argv);
