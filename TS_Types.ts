//? TypeScript Types

//! Any Type

let user: any;
user = 852;
user = "852";
user = true;
// avoid using any type as much as possible

//! Void Type
//usually used in function,opposite of any type
// define type void if the function is not returning anything
let color: string = "red";
const generateColor = (clr: string): void => {
  `Name of the color is: ${(color = clr)}`;
};
generateColor("green");
console.log(color);

//! Never Type
// value will never occur

const orderError = (error: string): never => {
  throw new Error(error);
  //never going to return a value
};
console.log(orderError("data fetch error"));

//! Null,Undefined,strictNullCheck
let roll: string | null = "852";

const removeRoll = (): void => {
  roll = null;
};
console.log(roll);
removeRoll();
console.log(roll);

console.log("object");
