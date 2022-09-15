import { Myself } from "./UtilityTypes/models";

// a type needs based on another type.

//A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type

//? A mapped type can be surmised by the formula type B = type A + transformation.

interface Point {
  x: number;
  y: number;
}

type PointKeysAsString = {
  [Property in keyof Point]: string;
};

const somePoint: PointKeysAsString = {
  x: "12",
  y: "13",
};

console.log("-------------------------");

type UnwantedTypeToNever<Type, ValueType> = {
  [Key in keyof Type]-?: Type[Key] extends ValueType ? Key : never;
};

type GetAge = UnwantedTypeToNever<Myself, number>;

console.log("-------------------------");

type HumanOne = {
  name: string;
};

type Getters<Type> = {
  [Property in keyof Type]: Type[Property];
};
type NewHuman = Getters<HumanOne>;

type GettersV2<Type> = {
  [Property in keyof Type]: () => Type[Property];
  // function return type
};

type GettersV3<Type> = {
  [Property in keyof Type]: () => { name: "Rakiv" };
  //transforming
};

//Changing the property names
type ChangePropertyNames<Type> = {
  [Property in keyof Type as `get${string & Property}`]: () => Type[Property];
};

type HumanGetter = ChangePropertyNames<HumanOne>;
