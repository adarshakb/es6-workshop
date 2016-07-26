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


/**
 * Arrow functions
 * - cannot give a name... sometimes a problem when debugging in stack trace anonymous function as i
 * - only expression without {}
 */


/**
 * arguments modification and passing
 */

//BEFORE

function foo() {
	var args = [].slice.call(arguments);
	args.shift(10);
	args.push(42);
	bar.apply(null,args);
}

// in ES6

function foo(...args){
	bar(10,...args,42); //automatically spread out the array for us
}

// In above ES6 its clear the intent of the code even tho both do the same stuff.

// we could also do the below but note that ...args should alwys be at the end for arguments.
function foo(x,y,...args){
	var a=[1,2,3,4];
	var b="5678";
	var c= [0,...a,...b,...args,7];
	bar(10,...args,x,y,42);
}