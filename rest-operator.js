/**
 * Rest Operator
 * Declared with three dots like ...
 * Use the send many data with a single arguments
 * Rest parameter must be the last parameter of a function
 */

//Simple function 
function simpleFunction(args){
  console.log(args);
}
console.log( simpleFunction(1,2,3) );

// function with rest operator
function restOperator(...args){
  console.log(args);
}
console.log( restOperator(1,2,3,4,5) );

// sum data with rest operator
function sumWithRest(...args){
  return args.reduce((a,b) => a+b);
}
console.log( sumWithRest(1,2,3,6,12) );

// work with rest operator as shopping cart with discount
function totalPrice(discount, ...prices){
  const total = prices.reduce((a, b)=> a+b);
  return total * (1-discount); // as percentage because percentage value from the parameter 0.1
}
console.log( totalPrice(0.1, 10, 50, 40) );