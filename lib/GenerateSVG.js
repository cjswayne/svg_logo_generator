
// Getting neccesary files
const inquirer = require('inquirer');
const questions = require('./questions');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./shapes');


class GenerateSVG{
    // Method to initialize
    static init(){
        inquirer.prompt(questions).then(answersObj => GenerateSVG.generate(answersObj));
    }

    // Mthd to generate svg
    
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

    // mthd to create file

    static createFile(shape){
        const shapeInnerText = 'logo';
        const svgPath = `./examples/${shapeInnerText}.svg`;
        fs.writeFile(svgPath, shape.createShape(), (err) => {
            if(err) return console.log(err);

            GenerateSVG.openFile(svgPath, shapeInnerText);
        })
    }

    // mthd to open file
    static openFile(svgPath, shapeInnerText){
        import('open').then(open => {
            open.default(svgPath).then(() => {
                console.log(`Created ${shapeInnerText}.svg`);
            })
            .catch(err => {
                console.error('Error opening file:', err); });

        }).catch(err => {
            console.error('Failed to load module:', err);
        });
    }
}

module.exports = GenerateSVG;