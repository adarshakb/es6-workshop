function upper(strings,...values) {
	var output = strings[0];
	for (let i = 1; i < strings.length; i++) {
		output += values[i-1].toUpperCase();
		output += strings[i];
	}
	return output;
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
