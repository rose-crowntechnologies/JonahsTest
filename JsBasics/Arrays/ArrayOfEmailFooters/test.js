const { expect, should, assert } = require('chai');
const {arrayOfEmailFooters} = require('./index')
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

describe('Tests for arrayOfEmailFooters', () => {

    it('should be named arrayOfEmailFooters', () => {
        expect(arrayOfEmailFooters).to.not.be.undefined;
    });

	// it is criteria that the function should pass.
	it('should return an array of 4 names.', () => {
        const assertion = arrayOfEmailFooters(people).length;
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.equal(4);
	});

	// it is criteria that the function should pass.
	it('should return each name in the array', () => {
        const assertion = arrayOfEmailFooters(people);
        
        expect(assertion).to.deep.equal(['josh', 'lauren', 'eli', 'calvin']);
	});
});