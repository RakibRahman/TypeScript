function Game(name: string) {
  this.name = name;
  this.toppings = [];
}

Game.prototype.addNew = function addNew(tag: string) {
  this.toppings.push(tag);
};

const game1 = new Game("Cyber");
game1.addNew("rpg");
console.log(game1);

//With class keyword

class Game2 {
  name: string;
  year: number;
  toppings: string[] = [];
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
  addNew(tag: string) {
    this.toppings.push(tag);
  }
}
const game2 = new Game2("halo", 2005);
game2.addNew("rpg");
game2.addNew("action");
console.log(game2.toppings);
