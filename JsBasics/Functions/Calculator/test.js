const { expect, should, assert } = require('chai');
const { calculator } = require('./index');

describe('Tests for calculator', () => {
	it('should be named calculator', () => {
		expect(calculator).to.not.be.undefined;
	});

	it(`should return 10 if given add 5 and 5`, () => {
		const assertion = calculator('add', 5, 5);
		expect(assertion).to.be.equal(10);
    });
	it(`should return 2 if given subtract 5 and 3`, () => {
		const assertion = calculator('subtract', 5, 3);
		expect(assertion).to.be.equal(2);
    });
	it(`should return 20 if given multiply 5 and 4`, () => {
		const assertion = calculator('multiply', 5, 4);
		expect(assertion).to.be.equal(20);
    });
	it(`should return 3 if given divide 15 and 5`, () => {
		const assertion = calculator('divide', 15, 5);
		expect(assertion).to.be.equal(3);
    });
	
});
