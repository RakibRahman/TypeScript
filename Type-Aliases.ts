let ballSize: "small" | "medium" | "large" = "small"; //union type
console.log(ballSize);

const selectBall = (size: "small" | "medium" | "large") => {
  ballSize = size;
};

selectBall("medium");
console.log(ballSize);

//! Type Aliases

type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;

const ballSelect: Callback = (x) => {
  ballSize = x;
};
ballSelect("large");
console.log(ballSize);

const calculatePrice = (quantity: 1 | 2, price: number): number => {
  return quantity * price;
};

let totalPrice = calculatePrice(2, 19);
// let totalPrice = calculatePrice(3, 19);
console.log(totalPrice);

type numVals = 1 | 2 | 3 | 4;
function getRandomValue(): numVals {
  return (Math.floor(Math.random() * 4) + 1) as numVals;
}
console.log(getRandomValue());
