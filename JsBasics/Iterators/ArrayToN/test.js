const { expect, should, assert } = require('chai');
const { arrayToN } = require('./index');

describe('Tests for arrayToN', () => {
	it('should be named arrayToN', () => {
		expect(arrayToN).to.not.be.undefined;
    });
    
	it(`should create an array of numbers from 1 to the nth number`, () => {
		const assertion = arrayToN(10);
		expect(assertion).to.be.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    });
	
});
