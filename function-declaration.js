// Function Declaration
function walk(){
  console.log('walk');
}

walk();

// Function Expression
const run = function move(){
  console.log('Function Expression');
};

run();

// Function Expression another rules
const run2 = function(){
  console.log('Function Expression 2');
};

run2();

// Anonymous Function Expression
const run3 = function(){
  console.log('Anonymous Function Expression');
};

let move = run3; // Here run3() is not working
move();