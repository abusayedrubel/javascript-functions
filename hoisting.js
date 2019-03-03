/**Hoisting
 * Hoisting is a process of moving function declaration to the top of the file and it is done automatically by the javascript engine which executing the code
 */


// Function Declaration: you can call a function before declaration
Hoisting(); 
function Hoisting(){
  console.log('Function Hoisting');
}

// Function Expression: you can not call this function variable before define or declare the function, because it's like a variable. And variables must declare before access that
//Hoisting2(); it will not working
const Hoisting2 = function(){
  console.log('Function Hoisting 2');
};

Hoisting2();