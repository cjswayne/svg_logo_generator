const {Triangle, Square, Circle} = require('../lib/shapes');


describe('SVG Shape Tests', () => {
    describe('Triangle Tests', () => {
        it('Should give correct svg string', () => {
            const shape = new Triangle();
            shape.setColor('red');

            
            const expectedStr = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`.trim();
            

        expect(shape.renderShape().trim()).toEqual(expectedStr);
        })
        it('Should generate a polygon svg string with correct properties that were set to it', () => {
            const shape = new Triangle();
            shape.setColor('red');
            shape.setTextColor('blue');
            shape.setInnerText('LOL');
            
            const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="blue">LOL</text></svg>`.trim();

        expect(shape.createShape().trim()).toBe(expectedSvg);
        })
    })
    describe('Square Tests', () => {
        it('Should give correct svg string', () => {
            const shape = new Square();
            shape.setColor('aqua');

            
            const expectedStr = `<rect x="50" y="50" width="200" height="200" fill="aqua" />`.trim();
            

        expect(shape.renderShape().trim()).toEqual(expectedStr);
        })
        it('Should generate a rect svg string with correct properties that were set to it', () => {
            const shape = new Square();
            shape.setColor('#FF3242');
            shape.setTextColor('green');
            shape.setInnerText('ABA');

            const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="#FF3242" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="green">ABA</text></svg>`.trim();

        expect(shape.createShape().trim()).toBe(expectedSvg);

        })
    })

    describe('Circle Tests', () => {
        it('Should give correct svg string', () => {
            const shape = new Circle();
            shape.setColor('yellow');

            
            const expectedStr = `<circle cx="150" cy="100" r="80" fill="yellow" />`.trim();
            

        expect(shape.renderShape().trim()).toEqual(expectedStr);
        })
        it('Should generate a circle svg string with correct properties that were set to it', () =>{
            const shape = new Circle();
            shape.setColor('#FFD342');
            shape.setTextColor('red');
            shape.setInnerText('sss');

            const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="#FFD342" /><text x="150" y="110" font-size="40" text-anchor="middle" fill="red">sss</text></svg>`.trim();

        expect(shape.createShape().trim()).toBe(expectedSvg);

        })
    })

})