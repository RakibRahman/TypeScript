//! Number Type
let cost: number = 25;
// console.log(cost);

const payment: number = 22;

//following functions returns a number , so if we return the number as string it will throw an error
const totalCost = (cost: number, vat: number): number => {
  //   return (cost + 1.5 * vat).toString();
  return cost + 1.5 * vat;
};
const output: number = totalCost(cost, payment);
// console.log(output);

//! String Type

const text: string = "THIS IS THE WORLD ";

const toLowerCaseString = (str: string): string => {
  return str.toLowerCase() + Number(25) + " working";
};
const num: number = 89;
const message: string = `Result is: ${num}: ${toLowerCaseString(text)}`;
// console.log(message);

//! Boolean Type

const tickets: number = 5;

const offerPrice = (orders: number): boolean => {
  return orders >= 3;
};

const res = offerPrice(tickets)
  ? "offer available"
  : "must buy at least three tickets";
console.log(res);
