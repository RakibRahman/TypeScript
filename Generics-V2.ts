class PersonNew {
  constructor(public name: string, public city: string) {}
}
class Product {
  constructor(public name: string, public price: number) {}
}
class City {
  constructor(public name: string, public population: number) {}
}
class EmployeeNew {
  constructor(public name: string, public role: string) {}
}
let people = [
  new PersonNew("Salehin", "Habiganj"),
  new PersonNew("Yamin", "Dhaka"),
];
let products = [new Product("Nokia", 6880), new Product("Samsung", 3200)];
const dataNew = [...people, ...products].forEach((item) => console.log(item));

// console.log(dataNew);

class DataCollection<T> {
  private items: T[] = [];
  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }
  add(newItem: T) {
    this.items.push(newItem);
  }
  getItem(index: number): T {
    return this.items[index];
  }
}
let peopleData = new DataCollection<PersonNew>(people);
const firstPerson = peopleData.getItem(0);
console.log(firstPerson);

let personThree = new PersonNew("Labib", "Sylhet");
peopleData.add(personThree);

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
productData.add(new Product("Motorola", 9630));
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);

//Example 2
function returnMe<T>(arg: T): T {
  return arg;
}
const returnStr = returnMe<string>("rakib");
const returnNum = returnMe<number>(20);
console.log(returnNum);
