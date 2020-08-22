// Variables

let name = 'Godwill';
let age = 26;
let residence = 'Kakamega';

alert (name);

// multiple variables in this multiline style:

let jina = 'Godwill', miaka = 26, anapotoka = 'Kakamega';

alert (residence);



// We can also change it as many times as we want:,  the old data is removed from the variable



let message;

message = 'Doho';

message = 'Lonely'

alert(message);


// We can also declare two variables and copy data from one into the other.

let jiina = 'Godwill2';

let namename;


// copy

namename = jiina;

alert(jiina);
alert(namename);


//cannot replicate

let messaji = "Hello WOrld";

// let messaji = "Bye World";

alert (messaji);


// Reserved keywords as of ECMAScript 2015
// ===============================================
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield

// Constants
// ---------------------------------------------------------------------
// To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';
myBirthday = '01.01.2001';

alert(myBirthday);


// Uncaught TypeError: Assignment to constant variable at index.js:95