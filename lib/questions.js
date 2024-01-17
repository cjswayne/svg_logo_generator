const chalk = require('chalk');
const convert = require('color-convert');

// function isValidColor(input, cb) {
//     let output;
//     if (input[0] === '#') {
//         if (input.length < 7){
//             output = `Must Be 7 Characters. ${input.length + 1} Characters Remaining`;
//         }  
//         output = /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/.test(input) ? true : 'Invalid Input';
//     } else if (convert.keyword.rgb(input.toLowerCase())) {
//         output =  true;
//     } else {
//         output = 'Invalid Color'
//     }
//     cb(output);
// }

// console.log(isValidColor('red'));
// import colors from 'color-name';

const questions = [
    {
        type:'input',
        name:'svgInnerText',
        message:`Enter SVG Text ${chalk.gray('(must be more than 3 characters)')}`,
        validate:function(input){
            return input.length > 3 ? 'must not be more than 3 char' : true
        },
        default:'CJS'
    },
    {
        type: 'input',
        name: 'svgInnerTextColor',
        message: `Enter SVG Text color ${chalk.gray('(Color Keyword OR Hex color)')}`,
        validate: function (input) {
        // function(input){
        //     isValidColor(input, output => output)
        // }
        

            if (input[0] === '#') {
                if (input.length < 7){
                    return `Must Be 7 Characters. ${input.length + 1} Characters Remaining`
                }  
                return /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/.test(input) ? true : 'Invalid Input';
            } else if (convert.keyword.rgb(input.toLowerCase())) {
                return true;
            } else {
                return 'Invalid Color'
            }

        },
        default:'red'
    },
    {   
        type:'list',
        name:'svgShape',
        message:'Choose Shape',
        choices:['circle', 'triangle', 'square'],
        default:'circle'
    },
    {
        type: 'input',
        name: 'svgColor',
        message: `Enter SVG Background Color ${chalk.gray('(Color Keyword OR Hex color)')}`,
        validate: function (input) {
            if (input[0] === '#') {
                if (input.length < 7){
                    return `Must Be 7 Characters. ${input.length + 1} Characters Remaining`
                }  
                return /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/.test(input) ? true : 'Invalid Input';
            } else if (convert.keyword.rgb(input.toLowerCase())) {
                return true;
            } else {
                return 'Invalid Color'
            }
        },
        default:'blue'
    }
]

module.exports = questions;