const { expect, should, assert } = require('chai');
const {sumOfAges} = require('./index')
const people = [
    {
        firstName:'josh',
        lastName:'smith',
        age:26,
        email:'josh@codebar.com'
    },
    {
        firstName:'lauren',
        lastName:'smith',
        age:22,
        email:'lauren@codebar.com'
    },
    {
        firstName:'eli',
        lastName:'smith',
        age:2,
        email:'eli@codebar.com'
    },
    {
        firstName:'calvin',
        lastName:'smith',
        age:0,
        email:'calvin@codebar.com'
    },
]
/// Describe is set of tests for one function.

describe('Tests for arrayOfNames', () => {

    it('should be named arrayOfNames', () => {
        expect(sumOfAges).to.not.be.undefined;
    });

	// it is criteria that the function should pass.
	it('should return an array of 4 names.', () => {
        const assertion = sumOfAges(people);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.equal(50);
	});

});