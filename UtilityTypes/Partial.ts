import { Myself } from "./models";

const rakib: Myself = {
  name: "Rakib",
  age: 20,
  hometown: "habiganj",
  division: "sylhet",
};

type PartialMySelf<Type> = Partial<Type>; //Partial type with generic

const rakibDuplicate: PartialMySelf<Myself> = {
  name: "rakib",
};

// Partial type with generic and mapped types
type PartialDemo<Type> = {
  [P in keyof Type]?: Type[P]; // ? modifier indicates that properties are optional
};

const rakibDuplicate2: PartialDemo<Myself> = {
  age: 20,
};
