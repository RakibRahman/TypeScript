//!  enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}

console.log(Direction[Direction.Down]);
console.log(Direction[0]);

enum Direction {
  TopBottom = 4, //starts from 4,cause 0-3 are taken by previous directions
}
console.log(Direction[4]);

const selectedDirection = 1;
console.log(Direction[selectedDirection]);

enum Sizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
let selected: Sizes = Sizes.Small;

const updateSize = (size: Sizes): void => {
  selected = size;
};

updateSize(Sizes.Large);

console.log(selected);
