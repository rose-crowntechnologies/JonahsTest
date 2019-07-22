const { expect, should, assert } = require('chai');
const { over5FeetTall } = require('./index');
const people = [
	{
		firstName: 'josh',
		lastName: 'smith',
		age: 26,
		email: 'josh@codebar.com',
		height: `5'11`
	},
	{
		firstName: 'lauren',
		lastName: 'smith',
		age: 22,
		email: 'lauren@codebar.com',
		height: `5'8`
	},
	{
		firstName: 'eli',
		lastName: 'smith',
		age: 2,
		email: 'eli@codebar.com',
		height: `3'6`
	},
	{
		firstName: 'calvin',
		lastName: 'smith',
		age: 0,
		email: 'calvin@codebar.com',
		height: `1'9`
	}
];
/// Describe is set of tests for one function.

describe('Tests for over5FeetTall', () => {
	it('should be named over5FeetTall', () => {
		expect(over5FeetTall).to.not.be.undefined;
	});

	// it is criteria that the function should pass.
	it('should return an array of 4 names.', () => {
		const assertion = over5FeetTall(people).length;
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.equal(2);
	});

	// it is criteria that the function should pass.
	it('should return each name in the array', () => {
		const assertion = over5FeetTall(people);

		expect(assertion).to.deep.equal([
			{
				firstName: 'josh',
				lastName: 'smith',
				age: 26,
				email: 'josh@codebar.com',
				height: `5'11`
			},
			{
				firstName: 'lauren',
				lastName: 'smith',
				age: 22,
				email: 'lauren@codebar.com',
				height: `5'8`
			}
		]);
	});
});

