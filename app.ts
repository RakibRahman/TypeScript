console.log("Hello World!");
let first__name = "Rakibur Rahman";
console.log(first__name);

const pizzas = [{ name: "Hot Birayani", type: ["mirchi"] }];
const food = pizzas.map((pizza) => pizza.name);
console.log(food);

const meal = {
  name: "Cow meat",
  getName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  },
};
console.log(meal.getName());

const person = {
  name: "Zakir",
  age: 36,
};
const job = ["developer"];
const info = { person, job };
console.log(info.person);
console.log(info.person.age);
console.log(info.job);
