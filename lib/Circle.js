const Shape = require('./Shape');

class Circle extends Shape {
    constructor(shapeColor, text, textColor, height, width, location) {
        super(shapeColor, text, textColor, height, width, location);
    }
    render() {
        return `<svg version="1.1"
        width="${this.width}" height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="50%" fill="${this.shapeColor}" />
        <text x="50%" y="${this.location}" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    }
}

module.exports = Circle;