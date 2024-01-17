const inquirer = require('inquirer');
const questions = require('./lib/questions');
const fs = require('fs');
// const open = require('open');
const {Triangle, Square, Circle} = require('./lib/shapes');

// Work on questions and validation for questions
class GenerateSVG{
    static init(){
        inquirer.prompt(questions).then(answersObj => GenerateSVG.generate(answersObj));
    }
    
    static generate({svgInnerText, svgInnerTextColor, svgShape, svgColor}){
        let shape;
        switch (svgShape){
            case 'circle':
                shape = new Circle();
                break
            case 'triangle':
                shape = new Triangle();
                break
            case 'square':
                shape = new Square();
                break
            default:
                console.log('Error');
                process.exit();
        }

        shape.setColor(svgColor);
        shape.setTextColor(svgInnerTextColor);
        shape.setInnerText(svgInnerText);
        GenerateSVG.createFile(shape);
    }

    static createFile(shape){
        const shapeInnerText = shape.innerText;
        const svgPath = `./examples/${shapeInnerText}_svg.svg`;
        fs.writeFile(svgPath, shape.createShape(), (err) => {
            if(err) return console.log(err);

            GenerateSVG.openFile(svgPath);
        })
    }

    static openFile(svgPath){
        import('open').then(open => {
            open.default(svgPath).then(() => {
                console.log(`${shapeInnerText}.svg Created Succesfully`);
            })
            .catch(err => {
                console.error('Error opening file:', err); });

        }).catch(err => {
            console.error('Failed to load module:', err);
        });
    }
}


GenerateSVG.init();