// The three most widely used type conversions are to string, to number, and to boolean.



// String Conversion




/*String conversion happens when we need the string form of a value.
For example, alert(value) does it to show the value.
We can also call the String(value) function to convert a value to a string: */

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


// Numeric Conversion


// Numeric conversion happens in mathematical functions and expressions automatically.
let x = "123";
alert(typeof x); // string

let num = Number(x); // becomes a number 123

alert(typeof num); // number



alert( Number("123z") );      
alert( Number(true) );        
alert( Number(false) );


/* Boolean Conversion
Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.*/


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // fals