const { expect, should, assert } = require('chai');
const { addAgeInTenYears } = require('./index');
const person = {
    firstName:'Joshua',
    lastName:'Smith',
    age: 26
}
describe('Tests for addAgeInTenYears', () => {
	it('should be named addAgeInTenYears', () => {
		expect(addAgeInTenYears).to.not.be.undefined;
    });
    
	it(`should add a property ageInTenYears and it should be the age + 10`, () => {
		const assertion = addAgeInTenYears(person);
		expect(assertion).to.be.deep.equal({
            firstName:'Joshua',
            lastName:'Smith',
            age: 26,
            ageInTenYears: 36
        });
    });
});
