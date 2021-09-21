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
    }, 100);
  },
};
console.log(meal.getName());
