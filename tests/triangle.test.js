const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('red','this is a test','white',1000,1000, '20%');
        console.log(`\`${triangle.render()}\``)
        expect(triangle.render()).toEqual(`<svg version="1.1" height="164" xmlns="http://www.w3.org/2000/svg"><polygon xmlns="http://www.w3.org/2000/svg" points="150, 18 244, 182 56, 182"  fill="red"/><text x="150" y="20%" font-size="30" text-anchor="middle" fill="white" style="transform:translateY(30px)">this is a test</text></svg>`);
    });
});