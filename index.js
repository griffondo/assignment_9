const readline = require('readline');
const fs = require('fs');

const gpl = require('./gpl');

const mit = require('./mit');
const mozilla = require('./mozilla');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What is your project title? ", function(title) {
    rl.question("Please enter a project description ", function(description) {
        rl.question("PLease enter install instructions ", function(installInstructions) {
            rl.question("Please enter usage info ", function(usageInfo) {
                rl.question("Please enter contribution guidelines ", function(contributionGuidelines) {
                    rl.question("Please enter test instructions ", function(testInstructions) {
                        rl.question("Please choose a license (gpl, MIT, Mozilla) ", function(license) {
                            rl.question("Please enter your github username ", function(username) {
                                rl.question("Please enter your email ", function(email) {
                                    let readmeString = `# ${title}\n`;
                                    readmeString += "## TOC\n";

                                    readmeString += "[Description](#Description)\n";
                                    readmeString += "[Install Instructions](#Install Instructions)\n";
                                    readmeString += "[Usage Info](#Usage Info)\n";
                                    readmeString += "[Contribution Guidelines](#Contribution Guidelines)\n";
                                    readmeString += "[Test Instructions](#Test Instructions)\n";
                                    readmeString += "[License](#License)\n";
                                    readmeString += "[Made by](#Made by)\n";
                                    readmeString += "[Questions](#Questions)\n";

                                    readmeString += `## Description\n${description}\n`;
                                    readmeString += `## Install Instructions \n${installInstructions}\n`;
                                    readmeString += `## Usage Info\n${usageInfo}\n`;
                                    readmeString += `## Contribution Guidelines\n${contributionGuidelines}\n`;
                                    readmeString += `## Test Instructions \n${testInstructions}\n`;
                                    if(license == "gpl")
                                        readmeString += `## License \n${gpl}\n`;
                                    else if(license == "MIT")
                                        readmeString += `## License \n${mit}\n`;
                                    else
                                        readmeString += `## License \n${mozilla}\n`;
                                    readmeString += `## Made by \n[${username}](https://github.com/${username})\n`;
                                    readmeString += `## Questions\nFeel free to reach me at ${email}`;
                                    fs.writeFile(__dirname+'/README.md', readmeString, function(error) {
                                        if (error) console.log(error);
                                    });
                                    setTimeout(function() {
                                        rl.close();
                                    }, 1000);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

rl.on('close', function() {
    process.exit(0);
})