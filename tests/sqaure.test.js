const Square = require('../lib/Square.js');

describe('Square', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const square = new Square('red','this is a test','white',1000,1000, '20%');
        expect(square.render()).toEqual(`<svg version="1.1"
        width="1000" height="1000"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="1000" height="1000" fill="red" />
        <text x="150" y="20%" font-size="70" text-anchor="middle" fill="white">this is a test</text>
        </svg>`
        );
    });
});