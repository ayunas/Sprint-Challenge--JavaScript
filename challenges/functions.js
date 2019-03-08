// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(arg1,arg2,cb) {
    return cb(arg1,arg2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


function add(num1,num2) {
    return num1+num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function greeting(first,last) {
    return `Hello ${first} ${last}, nice to meet you!`;
}



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(`\nThe result of calling the consume function with the add callback function: ${consume(2,2,add)}\n`); // 4
console.log(`The result of calling the consume function with the multiply callback function: ${consume(10,16,multiply)}\n`);
console.log(`The result of calling the consume function with the greeting callback function: ${consume("Mary","Poppins", greeting)}\n`);



// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

console.log(`Explanation: nestedFunction() is able to access the variable internal, even though it is outside of the function scope.  This is because of the concept in javascript known as a closure.  Javascript allows for this behavior in order to allow functions to behave correctly.  Technically, a function cannot access variables outside of it's scope.  But because of the closure, a nested function can access variables in functions outside of it, and even in the global context.\n`);


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();