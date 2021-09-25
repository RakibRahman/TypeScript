class Circle {
  static pi: number = 3.14;
  //! with static we dont need to create new instance
  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
const pi = Circle.pi;
const piValue = Circle.calculateArea(5);
console.log(pi);
console.log(piValue);

class Sports {
  static fav = ["football", "tennis", "cricket"];
  static addFav(sport: string) {
    return this.fav.push(sport);
  }
}
console.log(Sports.fav);
console.log(Sports.addFav("WWE"));
console.log(Sports.fav);
