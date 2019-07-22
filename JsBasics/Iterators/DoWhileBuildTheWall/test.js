const { expect, should, assert } = require('chai');
const { buildTheWall } = require('./index');

describe('Tests for buildTheWall', () => {
	it('should be named buildTheWall', () => {
		expect(buildTheWall).to.not.be.undefined;
    });
    
	it(`should return the amount of bricks you can lay with the money`, () => {
		const assertion = buildTheWall(10);
		expect(assertion).to.be.equal(11);
    });
    
	it(`should always return 1`, () => {
		const assertion = buildTheWall(-1);
		expect(assertion).to.be.equal(1);
    });
	
});
