/**
 * Arguments
 */


// Simple function with arguments
function withArguments( a, b ){
  return a+b;
}

console.log( withArguments(2,3) );

// function with shortArguments
function shortArguments(a, b){
  return a+b;
}
console.log( shortArguments(2) ); // It will shows NaN because number + undefine variable = NaN. here the argument b is undefined

// function with extraArguments
function extraArguments(a, b){
  return a+b;
}
console.log( extraArguments(2,3,5,10) );
//It's working, because js function take all the argument and work with only the valid arguments

// function with noArguments and arguments object
function noArguments(){
  console.log(arguments);
}
noArguments(1,2,3,4,5);

// work with arguments object, just a sum
function sum(a,b){
  let total = 0;
  for(let value of arguments)
    total += value;

  return total;
}
console.log( sum(1,2,3,6) );

// work with arguments object, just a sum
function sum2(){
  let total = 0;
  for(let value of arguments)
    total += value;

  return total;
}
console.log( sum2(1,2,3,6) );