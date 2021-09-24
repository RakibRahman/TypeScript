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
  public toppings: string[] = [];
  constructor(readonly name: string, public year: number) {}
  addNew(tag: string) {
    this.toppings.push(tag);
  }
  private delete() {
    this.toppings.pop();
  }
}
const game2 = new Game2("halo", 2005);
game2.addNew("rpg");
game2.addNew("action");
console.log(game2.toppings);
console.log(game2.year);
console.log(game2.name);
