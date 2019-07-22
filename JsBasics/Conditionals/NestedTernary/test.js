const { expect, should, assert } = require('chai');
const { restedTernary } = require('./index');
/// Describe is set of tests for one function.

describe('Tests for restedTernary', () => {
	it('should be named restedTernary', () => {
		expect(restedTernary).to.not.be.undefined;
	});

	// it is criteria that the function should pass.
	it(`should return false if the age doesn't match the number`, () => {
		const person = {
			name: 'charles',
			age: 25
		};
		const assertion = restedTernary(person, 26);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.false;
    });
    
	// it is criteria that the function should pass.
	it(`should return false if the name isn't charles`, () => {
		const person = {
			name: 'charlie',
			age: 25
		};
		const assertion = restedTernary(person, 26);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.false;
	});
	it(`should return true if the name is charles and the age matches`, () => {
		const person = {
			name: 'charles',
			age: 20
		};
		const assertion = restedTernary(person, 20);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.true;
	});
});