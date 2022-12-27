// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },{
        type: "input",
        message: "Please describe the application.",
        name: "description"

    },{
        type: "input",
        message: "Please provide installation instructions",
        name: "installation"
    },{
        type: "input",
        message: "Please provide usage information",
        name: "usage"
    },{
        type: "input",
        message: "Please enter contribution guidelines",
        name: "contribution"
    },{
        type: "input",
        message: "Please state test instructions",
        name: "test"
    },{
        type: "input",
        message: "Please enter your GitHub username",
        name: "username"
    },{
        type: "input",
        message: "Please enter your email",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "MIT",
            "None"
        ],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(err);
        }
    })
};
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(
        function(response){
            console.log(response);
            var readmeContent = generateMarkdown(response);
            console.log(readmeContent);
            writeToFile("./ReadMe.md", readmeContent);
        }
    )
};
    
// Function call to initialize app
init();
