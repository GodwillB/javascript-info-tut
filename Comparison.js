// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

// A comparison result can be assigned to a variable, just like any value:



let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

// The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.


alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1


alert( true == 1 ); // true
alert( false == 0 ); // true

// When comparing values of different types, JavaScript converts the values to numbers.

// For example:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// A funny consequence
// It is possible that at the same time:

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
// For example:

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

// Strict equality
// A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true
// The same thing happens with an empty string:

alert( '' == false ); // true
