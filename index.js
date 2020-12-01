const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Project Title.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter Description for Project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Enter usage information.',
            name: 'usage',
        },

        {
            type: 'input',
            message: 'Enter contribution guidelines.',
            name: 'contribution',
        },

        {
            type: 'list',
            message: 'Which license would you like to apply to your project?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL'],


        },

        {
            type: 'input',
            message: 'Enter Github Profile.',
            name: 'github',

        },

        {
            type: 'input',
            message: 'Enter email address.',
            name: 'email',
        },

        {
            type: 'input',
            message: 'Enter test instructions',
            name: 'test',
            
        }

    ])
// Promise generating framework of readme file

    .then((projectInfo) => {
        console.log(projectInfo);
        let readmeTemplate = `

        # ${projectInfo.title}

      # Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#test)
- [Questions](#questions)



 ## Description
${projectInfo.description}


## Installation
To install dependencies run the following command: 
\`\`\`
${projectInfo.instructions}
\`\`\`


## Usage
${projectInfo.usage}


## License
${projectInfo.license}


## Contribution
${projectInfo.contribution}


## Tests
${projectInfo.test}


## Questions
(https://github.com/${projectInfo.github}) 


Please contact me at (mailto:${projectInfo.email}) with any questions.`


const filename = 'README2.md';
// Creates read me file and adds the template to the file

fs.writeFile(filename,readmeTemplate, (err) =>
err ? console.log(err) :
console.log('Success!'));

})

