/**
let v/s var
------------
- var belongs to the entire funtion
- let is block scoping.

ex where using let is problem

function foo(x,y) {
	try {
		var z = bar(x+y);
	catch(err) {
		//do something
	}

	console.log(z);
}


function foo(x,y) {
	try {
		let z = bar(x+y);
	catch(err) {
		//do something
	}

	console.log(z); //ERROR
}


---------
another example

using VAR is bad -
function foo(x) {
	for(var i=0;i<x;i++) {
		$("#btn"+i).click(function() {
			console.log(i); // print X always!! wrong output
		});
;	}
}


using let is better -
function foo(x) {
	for(let i=0;i<x;i++) { //important
		$("#btn"+i).click(function() {
			console.log(i);// prints from 1 to X
		});
;	}
}

**/

//------------------------
// const v/s Object.freeze in ES6
//------------------------

// *** constant - a variable that cannot be reassigned ***

const PI = 3.14;
const X = [1,2,3];
x[0] = 4; //possble! :)


const Y = Object.freeze([1,2,3]);
Y[0] = 4; //ERROR!
var Z = Object.freeze([1,2,3]);
Z[0] = 4; //ERROR!
