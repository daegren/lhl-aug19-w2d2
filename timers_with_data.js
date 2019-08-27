let x = 1;
console.log("BEFORE CALL: ", x);

setTimeout(() => {
  x = 2;
  console.log("INSIDE CALL: ", x);
}, 1000);

setTimeout(() => {
  console.log("INSIDE SECOND CALL", x);
}, 500);

console.log("AFTER CALL", x);
