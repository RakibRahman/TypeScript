//!Union Type

let size: string = "small";

const selectSize = (setSize: "large" | "medium" | "small" | "extra"): void => {
  size = setSize;
};
selectSize("large");
console.log(size);

//! Function type
let sumOrder: Function;
sumOrder = (price: number, quantity: number): number => {
  return quantity * price;
};
console.log(sumOrder(50, 89));

let totalOrder: (price: number, quantity: number) => number;

totalOrder = (x, y) => x * y;

const sum = totalOrder(5, 10);

console.log(`Total Sum: ${sum}`);

//! Optional Arguments

let finalCost: (price: number, quantity?: number) => number;
finalCost = (a, b) => {
  if (b) return a * b;
  return a;
};
const finalSum = finalCost(96);
console.log(finalSum);
