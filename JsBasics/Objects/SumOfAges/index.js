// write a function sumOfAges that will take in an object and return the sum ages of all 
// family members both imediate and parental

const Josh = {
    firstName:'Joshua',
    middleName:'Richard',
    lastName:'Smith',
    age: 26,
    imediateFamily:{
        totalMembers:4,
        location:{
            city:'Windermere',
            state:'Florida',
            country:'United States',
        },
        members:[
            {
                firstName:'lauren',
                lastName:'smith',
                age:22,
            },
            {
                firstName:'eli',
                lastName:'smith',
                age:2,
            },
            {
                firstName:'calvin',
                lastName:'smith',
                age:0,
            },
        ]
    },
    ParentFamily:{
        totalMembers:4,
        location:{
            city:'Windermere',
            state:'Florida',
            country:'United States',
        },
        members:[
            {
                firstName:'Jacob',
                lastName:'Smith',
                age:28,
            },
            {
                firstName:'Jeremiah',
                lastName:'Smith',
                age:23,
            },
            {
                firstName:'Benjamin',
                lastName:'Smith',
                age:22,
            },
            {
                firstName:'Issac',
                lastName:'Smith',
                age:18,
            },
            {
                firstName:'Joseph',
                lastName:'Smith',
                age:16,
            },
            {
                firstName:'Adam',
                lastName:'Smith',
                age:14,
            },
        ]
    }
}

// sumOfAges(Josh) =  145

////////////////Code Below/////////////////////////

//////////////////////////////////////////////////

//DO NOT TOUCH THIS!!!!!!!
module.exports = {
    sumOfAges,
}
