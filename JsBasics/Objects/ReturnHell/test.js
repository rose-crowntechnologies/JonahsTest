const { expect, should, assert } = require('chai');
const { returnHell } = require('./index');

const person = {
    firstName:'Jonah',
    middleName:'JR',
    lastName:'Latham',
    age: 21,
    imediateFamily:{
        totalMembers:1,
        location:{
            city:'Windermere',
            state:'Florida',
            country:'United States',
        },
        members:[]
    },
    ParentsChildren:{
        totalMembers:7,
        location:{
            city:'Orem',
            state:'Utah',
            country:'United States',
        },
        siblings:[
            {
                firstName:'Madison',
                lastName:'Bedwell',
                age:31,
            },
            {
                firstName:'Heather',
                lastName:'Austin',
                age:30,
            },
            {
                firstName:'Hannah',
                lastName:'Wong',
                age:24,
            },
            {
                firstName:'Ammon',
                lastName:'Latham',
                age:28,
            },
            {
                firstName:'Lauren',
                lastName:'Smith',
                age:22,
            },
            {
                firstName:'Aaron',
                lastName:'Latham',
                age:27,
            },
        ]
    }
}
describe('Tests for returnHell', () => {
	it('should be named returnHell', () => {
		expect(returnHell).to.not.be.undefined;
    });
    
	it(`should return youngest siblings age + 5`, () => {
		const assertion = returnHell(person);
		expect(assertion).to.be.equal(27);
    });
});
