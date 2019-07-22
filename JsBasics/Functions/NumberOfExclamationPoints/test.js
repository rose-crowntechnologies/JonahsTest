const { expect, should, assert } = require('chai');
const { numberOfExcalamationPoints } = require('./index');

describe('Tests for numberOfExcalamationPoints', () => {
	it('should be named numberOfExcalamationPoints', () => {
		expect(numberOfExcalamationPoints).to.not.be.undefined;
	});

	it(`should count the number of exclamation points`, () => {
		const assertion = numberOfExcalamationPoints('GetHerDone!!!');
		expect(assertion).to.be.equal(3);
    });
	it(`should count the number of exclamation points`, () => {
		const assertion = numberOfExcalamationPoints('!!!GetHerDone!!!');
		expect(assertion).to.be.equal(6);
    });
	it(`should count the number of exclamation points`, () => {
		const assertion = numberOfExcalamationPoints('Get!Her!Done!!!');
		expect(assertion).to.be.equal(5);
    });
	
});
