const Shape = require('./Shape');

class Square extends Shape {
    constructor(shapeColor, text, textColor, height, width, location) {
        super(shapeColor, text, textColor, height, width, location);
    }
    render() {
        return `<svg version="1.1"
        width="${this.width}" height="${this.height}"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="${this.width}" height="${this.height}" fill="${this.shapeColor}" />
        <text x="150" y="${this.location}" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = Square;