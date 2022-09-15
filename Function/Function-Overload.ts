//? Function Overloading => Use when you are aware of the argument types and the return type does change depending on the argument types;

function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve"
add(10, 20); // returns 30

function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(something: string | T[]): string | T[] {
  if (typeof something === "string") {
    return something.split("").reverse().join("");
  }
  return something.slice().reverse();
}
const strValue = reverse("rakib");
const arrValue = reverse(["rakib", "rahman"]);
console.log(strValue);
console.log(arrValue);
