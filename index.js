const inquirer = require('inquirer');
const questions = require('./lib/questions');
const {Triangle, Square, Circle} = require('./lib/shapes');
const shape = new Triangle('red')


console.log(shape);

shape.setColor('blue');
console.log(shape.render());
// import colors from 'color-name';

// Work on questions and validation for questions
class GenerateSVG{
    static init(){
        inquirer.prompt(questions).then((answersObj) => {
            switch (answersObj.choice){
                case 'circle':

                    break
                case 'triangle':
                    break
                case 'square':

                    break
                default:
                    console.log('Error');
            }
        });
    }
}


// GenerateSVG.init();