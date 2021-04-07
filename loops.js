// WHILE LOOP

while (condition) {
  // code
  // so-called "loop body"
}
// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// For example:

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.

// It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}
// Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
