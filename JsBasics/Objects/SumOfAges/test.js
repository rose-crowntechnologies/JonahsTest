const { expect, should, assert } = require('chai');
const { sumOfAges } = require('./index');

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
describe('Tests for sumOfAges', () => {
	it('should be named sumOfAges', () => {
		expect(sumOfAges).to.not.be.undefined;
    });
    
	it(`should return the sum of all the ages of the imediate members and parentChildren siblings`, () => {
		const assertion = sumOfAges(person);
		expect(assertion).to.be.equal(27 + 22 + 28 + 24 + 30 + 31);
    });
});
