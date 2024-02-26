const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(shapeColor, text, textColor, height, width, location) {
        super(shapeColor, text, textColor, height, width, location);
    }
    render() {
        let translate = "";
        switch(this.location) {
            case "20%":
                translate = "transform:translateY(30px)";
                break;
            case "50%":
                translate = "transform:translateY(25px)";
                break;
            case "90%":
                break;
        }
        return `<svg version="1.1" height="164" xmlns="http://www.w3.org/2000/svg"><polygon xmlns="http://www.w3.org/2000/svg" points="150, 18 244, 182 56, 182"  fill="${this.shapeColor}"/><text x="150" y="${this.location}" font-size="30" text-anchor="middle" fill="${this.textColor}" style="${translate}">${this.text}</text></svg>`;
    }
}

module.exports = Triangle;