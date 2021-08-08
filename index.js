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
         message: "In the terminal or bash console, using the command line, use the following commands to install the dependencies required for this file"
         //give user a list of instructions to install package.json & lock.json

      },

      {
         type: "input",
         name: "Installation",
         message: "Switch your terminal to node by typing in 'node'"
         //give user a list of instructions to install package.json & lock.json

      },
      
      {
         type: "input",
         name: "Installation",
         message: "Type ‘npm init’ to download the package.json file"
         //give user a list of instructions to install package.json & lock.json

      },

      {
         type: "input",
         name: "Installation",
         message: "Type 'npm install’ to install all of the node dependencies required for this index.js file. It will also create the package.json-locked file."
         //give user a list of instructions to install package.json & lock.json

      },

      {
         type: "input",
         name: "Installation",
         message: "Switch your terminal or bash console to node by typing in the word ‘node’."
         //give user a list of instructions to install package.json & lock.json

      },

      {
         type: "input",
            name: "Installation",
         message: "Then type ‘node index.js’. This will start the process for completing your README.md document."
         //give user a list of instructions to install package.json & lock.json

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
      * [Usage](#usage)
      * [License](#license)
      * [Contributions](#contributions)
      * [Tests](#tests)
      * [Questions](#questions)
      
      ### Installation:
      To install the required dependencies, open the console and run the following command line instructions:

      `
   }




