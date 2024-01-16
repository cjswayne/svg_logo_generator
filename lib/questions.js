const chalk = require('chalk');

const questions = [
    {
        type:'input',
        name:'svgInnerText',
        message:`Enter SVG Text ${chalk.gray('(must be more than 3 characters)')}`,
        validate:function(input){
            if(input.length > 3){
                return 'must not be more than 3 char'
            }
        }
    },
    {

    }
]

module.exports = questions;