// Write a function called returnHell that takes in an object and 
// returns the youngest siblings age in 5 years. ;

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
    ParentsChildren:{
        totalMembers:7,
        location:{
            city:'Orem',
            state:'Utah',
            country:'United States',
        },
        siblings:[
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
// returnHell(Josh) =  19

////////////////Code Below/////////////////////////

//////////////////////////////////////////////////

//DO NOT TOUCH THIS!!!!!!!
module.exports = {
    returnHell,
}
