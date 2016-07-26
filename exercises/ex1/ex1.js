const multiplier = 2;
var x = 2, fns = [];

(function(){
	const x = 5;

	for (let i=0; i<x; i++) {
		fns[i*multiplier] = function() {
			return i*multiplier;
		}
	}
})();

console.log(
	(x * multiplier) === fns[x*multiplier]()
);
// true
