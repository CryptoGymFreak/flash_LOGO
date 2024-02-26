const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const circle = new Circle('red','this is a test','white',1000,1000, '20%');
        expect(circle.render()).toEqual(`<svg version="1.1"
        width="1000" height="1000"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="50%" fill="red" />
        <text x="50%" y="20%" font-size="70" text-anchor="middle" fill="white">this is a test</text>
    </svg>`
        );
    });
});