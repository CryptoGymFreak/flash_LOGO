class Shape {
  color;
  renderedShape;
  height;
  width;
  location;
  constructor(shapeColor, text, textColor, height, width, location) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.height = height;
    this.width = width;
    this.location = location;
  }

  setColor(color) {
    this.color = color;
  }

  render() {

  }
}

module.exports = Shape;
