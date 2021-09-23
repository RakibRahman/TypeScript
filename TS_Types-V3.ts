//! Object Types

let pizza: { name: string; price: number; getInfo(): string } = {
  name: "Chilli Pizza",
  price: 26,
  getInfo(): string {
    return `Name: ${pizza.name} ||  Price: ${pizza.price}`;
  },
};

const item = pizza.getInfo();
console.log(item);

//! Array Types
let sizes: string[];
let sizes2: number[] = [1, 2, 3];
let values: (string | number)[];

sizes = ["small", "large", "medium"];
values = ["small", "large", "medium", 1, 2, 3];
for (let item of sizes) {
  console.log(item);
}
console.log(sizes2);

for (let item in values) {
  console.log(values[item]);
}

//! Generic Types

let sports: Array<string>;
sports = ["cricket", "football", "tennis"];

//! Tuples Types

let tasks: [string, number, boolean];
tasks = ["learn TS", 85, true];
tasks.push("learn angular", 71, "r");
console.log(tasks[tasks.length - 2]);
