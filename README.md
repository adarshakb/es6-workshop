
# Notes

... this is personal notes... might not make sense if you are not me!... see code examples.

------------
##let v/s var - BLOG!
------------
- var belongs to the entire funtion
- let is block scoping.

####ex where using let is problem

```javascript
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
```

---------
####another example

... here using VAR is bad -

```javascript

function foo(x) {
	for(var i=0;i<x;i++) {
		$("#btn"+i).click(function() {
			console.log(i); // print X always!! wrong output
		});
;	}
}

```

...using let is better -

```javascript

function foo(x) {
	for(let i=0;i<x;i++) { //important
		$("#btn"+i).click(function() {
			console.log(i);// prints from 1 to X
		});
;	}
}
```
**/

------------------------
##const v/s Object.freeze in ES6 - BLOG!
------------------------

// *** constant - a variable that cannot be reassigned ***

```javascript
const PI = 3.14;
const X = [1,2,3];
x[0] = 4; //possble! :)


const Y = Object.freeze([1,2,3]);
Y[0] = 4; //ERROR!
var Z = Object.freeze([1,2,3]);
Z[0] = 4; //ERROR!

```


## Arrow functions
- problem is cannot give a name... sometimes a problem when debugging in stack trace anonymous function as i
- only expression without {}


/**
 * arguments modification and passing
 */

//BEFORE

```javascript
function foo() {
	var args = [].slice.call(arguments);
	args.shift(10);
	args.push(42);
	bar.apply(null,args);
}
```
// in ES6
```javascript
function foo(...args){
	bar(10,...args,42); //automatically spread out the array for us
}
```
// In above ES6 its clear the intent of the code even tho both do the same stuff.

// we could also do the below but note that ...args should alwys be at the end for arguments.

```javascript

function foo(x,y,...args){
	var a=[1,2,3,4];
	var b="5678";
	var c= [0,...a,...b,...args,7];
	bar(10,...args,x,y,42);
}
```
/**
 * ES6 has defaul value parameter in function.
 */

```javascript
//BEFORE
function foo(x) {
	x = x|| 10;
	//some code
}
```
```javascript
//ES6
function foo(x = 10) {
	//some code
}

// can also have
function foo(x = bar()) {
	//som code
}

//required parameter error - BLOG!
function required() {
	throw new Error("parameter required");
}

function foo(x = required()) {
	//some code
}
```

## structuring in ES6 - BLOG!

```javascript
//BEFORE

function foo() {
	return [1,2,3];
}

//we are destructuring here. Its very repetitive
var tmp = foo(),
	a=tmp[0],
	b=tmp[1],
	c=tmp[2];

console.log(a,b,c); //1,2,3

// ES6
function foo() {
	return [1,2,3];
}

var [a,b,c] = foo();

//problem is if foo() return null.. we can change it

var [d,e,f = 10] = foo() || [];

//here F has default value 10 when f is undefined.

var o = {};

[o.a = 10,
o.b,
o.c = 9] = foo() || []

//now you can use this to swap
var p = 10, q = 20;
[q,p] = [p,q]

//nested destructuring

var o = {}

function foo() {
	return [1,2,[3,4],5];
}

[
 o.a = 9,
 o.b = 10,
 [
 	o.c ,
 	o.d = 10
 ] = [],
 o.e = 1
] = foo();

// object assignment pattern

function foo() {
	return {
		a: 1,
		b: 2
	};
}

var {
	a,
	b = 10
} = foo();

// we can assign multiple patterns

function foo() {
	return {
		a: 1,
		b: [2,3,4]
	};
}

var {
	a,
	b: b1,
	b : [b2,b3]
} = foo();

//named arguments with JS

function foo({name,
			age=30,
			phone=607744,
			dob}) {
	console.log(arguments);
}

foo({
	name: "kyle",
	age: 36,
	dob: "2.3.4"
})
```



##Interpolatio in JS using template literals

```javascript
var x = "kyle";
var y = 34;

var msg = `Hello, ${x} and your order costs ${y}`; //the back-tick ` ` is used along with ${}


// strings - array of strings from msg2
// rest of the parameters are individual values.
function foo(strings,...values) {
	return "I am evil :)";
}

var msg2 = foo`Hello, ${x} and your order costs ${y}`; // function template - value - I am evil :)
```

## Symbols in javascript

```javascript
var key = Symbol("special property");

var o = {

};
o[key] = 42;
```

- there are different types of Symbols
- Symbol.iterator

```javascript
var o = {
	[Symbol.iterator]() {
		var idx=0;
		var self = this;
		return {
			next() {
				var val = self.values[idx];
				idx += 2;
				return { value: val, done: !(idx < self.values.length-1)}
			}
		}
	},
	values: [1,2,3,4,5,6,7]
}
var it = o[Symbol.iterator]()
it.next(); //output  {value: 1, done: false}
it.next(); //output  {value: 3, done: false}
it.next(); //output  {value: 5, done: false}
it.next(); //output  {value: 7, done: true}
it.next(); //output  {value: undefined, done: true}
```

#### Generators + iterator!!!

... above iterator program can be improved
var o = {
	*[Symbol.iterator]() {
		var idx =0;
		while(idx < this.values.length) {
			yield this.values[idx]; //yield keyword takes whatever value and send it. and pauses
			idx += 2;
		}
	},
	values: [1,2,3,4,5,6,7]
}
var it = o[Symbol.iterator]()
it.next(); //output  {value: 1, done: false}
it.next(); //output  {value: 3, done: false}
it.next(); //output  {value: 5, done: false}