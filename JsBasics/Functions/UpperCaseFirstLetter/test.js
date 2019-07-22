const { expect, should, assert } = require('chai');
const { upperCaseFirstLetter } = require('./index');

describe('Tests for upperCaseFirstLetter', () => {
	it('should be named upperCaseFirstLetter', () => {
		expect(upperCaseFirstLetter).to.not.be.undefined;
    });
    
	it(`should count the number of exclamation points`, () => {
		const assertion = upperCaseFirstLetter('josh');
		expect(assertion).to.be.equal('Josh');
    });
	
});
