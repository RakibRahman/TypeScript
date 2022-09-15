//? Generics => Use when you are not aware of the argument types or the return type is a direct mapping of the argument types.

type SingleNamePerson = {
  name: string;
};

type FullNamePerson = {
  name: string;
  surname: string;
};

function getPersonName<PersonT>(arg: PersonT): PersonT {
  return arg;
}

console.log(getPersonName({ name: "rakib" }));
console.log(getPersonName("rakib"));

function getFirstElement<T>(array: T[]): T {
  return array[0];
}

const a = getFirstElement([23, 2, 89]);
const b = getFirstElement([false, true, true]);
const c = getFirstElement(["Mehedi", "Galib"]);

console.log(a);
console.log(b);
console.log(c);
