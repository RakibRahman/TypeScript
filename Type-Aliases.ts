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
