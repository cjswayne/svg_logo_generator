class Shape{
    constructor(color){
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shape {
    // constructor(){

    // } 
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Square extends Shape {
    // constructor(){
        
    // }
}
class Circle extends Shape {
    // constructor(){
        
    // }
}


module.exports = {Triangle, Square, Circle};