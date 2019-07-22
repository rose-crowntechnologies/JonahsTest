const { expect, should, assert } = require('chai');
const { whileStillAlive } = require('./index');

describe('Tests for whileStillAlive', () => {
	it('should be named whileStillAlive', () => {
		expect(whileStillAlive).to.not.be.undefined;
    });
    
	it(`should return an array of '$' for each heart that you have`, () => {
		const assertion = whileStillAlive(6);
		expect(assertion).to.be.equal(['$', '$', '$', '$', '$','$']);
    });
	
});