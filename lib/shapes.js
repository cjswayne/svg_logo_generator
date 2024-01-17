class Shape{
    // constructor(color){
    //     this.color = color;
    // }

    // Method to set bg color
    setColor(color){
        this.color = color;
    }
    
    // Method to set text color
    setTextColor(color){
        this.textColor = color;
    }

    // Method To set text content
    setInnerText(text){
        this.innerText = text;
    }


        // Method to render text
        renderText(){
            return `<text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.innerText}</text>`
        }

    createShape(){
        const svg = (`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.renderShape()}
      
        ${this.renderText()}      
      </svg> 
        `)
        return svg
    }


}

class Triangle extends Shape {
    // constructor(){

    // } 
    renderShape(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
    
}
class Square extends Shape {
    // constructor(){
        
    // }
    renderShape(){
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }

}
class Circle extends Shape {
    // constructor(){
        
    // }
    renderShape(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
    // Method to render text
    renderText(){
        return `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.innerText}</text>`
    }
}


module.exports = {Triangle, Square, Circle};