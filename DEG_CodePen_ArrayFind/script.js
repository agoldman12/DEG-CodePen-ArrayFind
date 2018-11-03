/* 
Below we have an array of objects. Each object represents a person.

Goal: Learn to use the Array.find method

Task: Find the person loyal to House Targaryen

Hint: You will need to define a custom find function

For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

const people = [
	{name: 'Robb Stark', allegiance: 'House Stark'},
	{name: 'Danerys Targaryen', allegiance: 'House Targaryen'},
	{name: 'Cersei Lannister', allegiance: 'House Lannister'},
	{name: 'Jon Snow', allegiance: 'House Stark'},
	{name: 'Lysa Aryn', allegiance: 'House Baelish'},
	{name: 'Arya Stark', allegiance: 'House Stark'}
];

const person = people.find(person => person.allegiance === 'House Targaryen'); // find person code goes here


document.querySelector('div').innerHTML = `${(person && person.name) || ''}`

/*
1. Why is the div's innerHTML set to `${(person && person.name) || ''}`? 
2. Should the result log the whole object and also the vale of the name propery?
3. Why is the 'or' operator there with an empty string on the other side?
*/
