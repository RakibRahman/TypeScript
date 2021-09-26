class Item {
  constructor(private name: string, private price: number) {}
}
class List<T> {
  private list: T[] = [];
  // constructor(name: string, ) {}

  addItem(item: T): void {
    this.list.push(item);
  }
  getList(): T[] {
    return this.list;
  }
}
const list = new List<Item>();
list.addItem(new Item("meat", 15));
console.log(list.getList());
list.addItem(new Item("vegetable", 5));
console.log(list.getList());

const foods = list.getList();
console.log(foods);

class Coupon {
  constructor(private name: string) {}
}
const anotherList = new List<Coupon>();
anotherList.addItem(new Coupon("vegetable"));
console.log(anotherList.getList());

//Example 2

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["Type", "Name", "more"]);

console.log(numArray);
console.log(strArray);

numArray.push(50); //OK
// numArray.push('push'); //Compiler error

strArray.push("push"); //OK
// strArray.push(50); // Compiler Error

const identify = <T>(arg: T): T => {
  return arg;
};
const stringValue = identify("string value returns");
console.log(stringValue);

//! Generic Interface

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: "Steve" }; // OK
let kv2: KeyPair<number, number> = { key: 1, value: 12345 }; // OK
