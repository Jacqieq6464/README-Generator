// //const inquirer = require('inquirer') has been convered to ES6 code below

//import inquirer from 'inquirer';
//these are the node modules required for this file/application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Choices = require('inquirer/lib/objects/choices');//not sure where this line came from?? & Choices is greyed out??


const writeFileAsync = util.promisify(fs.writeFile);

//inquirer is being used to generate prompts for the questions
const questions = () =>
   inquirer.prompt([
      {
         type: "input",
         name: "author",
         message: "what is the name of the author?"

      },

      {
         type: "input",
         name: "username",
         message: "what is you GitHub user name?"

      },

      {
         type: "input",
         name: "email",
         message: "what is your email address?"

      },

      {
         type: "input",
         name: "Title",
         message: "what is the name of your project?"

      },

      {
         type: "input",
         name: "Description",
         message: "Please provide a brief description of your project"

      },
      {
         type: "list",
         name: "license",
         message: "what type of license will your project need (if any)?",
         choices: ["Apachi 2.0", "MIT", "Open Software License 3.0", "Educational Community License v2.0", "None"]
      },

      {
         type: "input",
         name: "Installation",
         message: "In terminal or bash, using the command line, use the following commands to instal the dependencies required for this file"
         //give user a list of instructions to instal package.json & lock.json

      },

      // {
      //    type: "input",
      //    name: "username",
      //    message: "what is you GitHub user name?"

      // },

      // {
      //    type: "input",
      //    name: "username",
      //    message: "what is you GitHub user name?"

      // },


   ]);

   function generateMD(data){

      return`# ${data.title}
      ${badge}
      ${data.description}
      ## Table of Contents:
      * [Installation](#installation)
   }




