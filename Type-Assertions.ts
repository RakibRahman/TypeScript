type User = { name: string; id: number };
type CallbackFn = (user: User) => string;
const user1: User = { name: "rakib", id: 2 };
const user2: User = { name: "zakir", id: 24 };

const userInfo: CallbackFn = (r) => `${r.name}`;
const res1 = userInfo(user1);
const res2 = userInfo(user2);
// console.log(res1);
// console.log(res2);

//! Type Assertion
let code: any = 123;
let userCode = <number>code;
// console.log(typeof userCode);

// let employee = {};
// employee.name = "pain";  will give compiler error

let employee = <User>{};
employee.name = "sakib";
employee.id = 89;

// console.log(employee);

const serialized = JSON.stringify(user1);

const getInfoFromJSON = (obj: string) => {
  return JSON.parse(obj) as User;
};
const user1Name = getInfoFromJSON(serialized).name;
// console.log(user1Name);

//Demo

const calculateVat = (amount: number, format: boolean): string | number => {
  const calcAmount = amount * 1.2;
  return format ? `${calcAmount.toFixed(2)}` : calcAmount;
};

//type Assertion
let vatNumber = calculateVat(500, false) as number;
let vatString = calculateVat(300, true) as string;
// Alternative syntax:
let vatNumber2 = <number>calculateVat(200, false);
console.log(`Number vat: ${vatNumber}`);
console.log(`String vat: ${vatString}`);
console.log(`Number vat: ${vatNumber2}`);

// let taxBoolean = calculateVat(100, false) as boolean;
