const StringLib = require('./stringlib.js');
const string = new StringLib();
console.log(string.concat("Village", "88")); // Output: Village88
console.log(string.repeat("ha", 3)); // Output: hahaha
console.log(string.toString(5)); // Output: 5
console.log(string.charAt("nice", 2)); // Output: c

// es6
/* import StringLib from './stringlib.js';
const string = new StringLib();
console.log(string.concat("Village", "88")); // Output: Village88
console.log(string.repeat("ha", 3)); // Output: hahaha
console.log(string.toString(5)); // Output: 5
console.log(string.charAt("nice", 2)); // Output: c */
