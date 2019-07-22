const { expect, should, assert } = require('chai');
const { over5FeetTall } = require('./index');
/// Describe is set of tests for one function.

describe('Tests for arrayOfNames', () => {
	it('should be named arrayOfNames', () => {
		expect(over5FeetTall).to.not.be.undefined;
	});

	// it is criteria that the function should pass.
	it(`should return false if the age doesn't match the number`, () => {
		const person = {
			name: 'charles',
			age: 25
		};
		const assertion = over5FeetTall(person, 26);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.false;
    });
    
	// it is criteria that the function should pass.
	it(`should return false if the name isn't charles`, () => {
		const person = {
			name: 'charlie',
			age: 25
		};
		const assertion = over5FeetTall(person, 26);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.false;
	});
	it(`should return true if the name is charles and the age matches`, () => {
		const person = {
			name: 'charles',
			age: 20
		};
		const assertion = over5FeetTall(person, 20);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.true;
	});
});
