// This way, we can attribute a variable to each value
[a, b] = [ 1, 2 ];

console.log( a );
console.log( b );

// Now, if we had a longer array, we can use deconstructing to store
//  all of the other values in one variable.
[ a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];

console.log( rest );

// Defining a value in order to not let an undefined result

const [ name = 'Mary' ] = [];

console.log( name );

// We can add the deconstructed object to a new one

const person = {
    name: 'Mary',
    age: '30'
};

const withNumber = { ... person, number: 1 };

console.log( person, withNumber );

// There is also the possibility to get a certain proprierties 
//  directly to a variable

const { age } = person;

console.log( age );

// We can get the object's properties directly on the function's params
//  Just a reminder that it won't return the object, but 2 variables instead.

function getData ({ name, age }) {
    console.log( name, age );
};

getData( person );