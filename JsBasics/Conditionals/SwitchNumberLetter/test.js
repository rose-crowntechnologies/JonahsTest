const { expect, should, assert } = require('chai');
const { switchNumberLetter } = require('./index');
/// Describe is set of tests for one function.

describe('Tests for switchNumberLetter', () => {
	it('should be named switchNumberLetter', () => {
		expect(switchNumberLetter).to.not.be.undefined;
	});

	// it is criteria that the function should pass.
	it(`should return 'E' given 5`, () => {
		const assertion = switchNumberLetter(5);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.equal('E');
    });
	it(`should return 'J' given 10`, () => {
		const assertion = switchNumberLetter(5);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.equal('J');
    });
	it(`should return 'M given 14`, () => {
		const assertion = switchNumberLetter(14);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.equal('M');
    });
	it(`should return 'Z' given 26`, () => {
		const assertion = switchNumberLetter(26);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.equal('Z');
    });
    
	
});
