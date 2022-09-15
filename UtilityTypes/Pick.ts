import { Myself } from "./models";

type UserInfo = Pick<Myself, "age" | "name">;

// Custom Pick+Mapped type
type CustomPick<Type, Keys extends keyof Type> = {
  [P in Keys]: Type[P]; //* only loop the properties that extends K
};

type MyPick = CustomPick<Myself, "age" | "name">;

const myInfo: MyPick = {
  age: 20,
  name: "rakib",
};

//Pick by value
type PickByValue<Type, ValueType> = Pick<
  Type,
  {
    [Key in keyof Type]-?: Type[Key] extends ValueType ? Key : never;
  }[keyof Type]
>;

type GetInfo = PickByValue<Myself, string>;

//* -? > it removes optionality (?)
