type Husband = {
  profession: string;
  age: number;
};

type Wife = {
  firstName: string;
  religious: boolean;
};

type GetRequiredInfo<TType> = TType extends Husband
  ? { hasBeard: boolean }
  : TType extends Wife
  ? { age: number }
  : never;

type RequiredInfoForHusband = GetRequiredInfo<Husband>;
type RequiredInfoForWife = GetRequiredInfo<Wife>;

const getWifeInfo = (Reqinfo: RequiredInfoForWife, info: Wife) => {
  return Object.assign(info, Reqinfo);
};

console.log(getWifeInfo({ age: 0 }, { firstName: "unknown", religious: true }));

console.log("------------------");

const compareValues = <Arg>(
  a: Arg extends any[] ? `Don't pass array'` : Arg,
  b: Arg
): boolean => {
  return a === b;
};
const isEqual = compareValues(2, 1);

console.log(isEqual);

console.log("-------------");

type UserPhoneNumber<T> = T extends number ? number : string;

const phoneOne: UserPhoneNumber<number> = 18296;
const phoneTwo: UserPhoneNumber<string> = "01829661796";

console.log("-------------");

type Human = {
  age: number;
  name: string;
  address: string;
};

type Horse = {
  age: number;
  name: string;
};

type HumanAddress = {
  addressLine1: string;
  city: string;
  country: string;
};

type HorseAddress = {
  location: "farm" | "savanna" | "field" | "other";
};

type GetRequiredAddress<T> = T extends { address: string }
  ? HumanAddress
  : HorseAddress;

let userAddress: GetRequiredAddress<Human> = {
  addressLine1: "123 Fake Street",
  city: "Boston",
  country: "USA",
};

let horseAddress: GetRequiredAddress<Horse> = {
  location: "farm",
};

type UserType<T> = T extends { address: string } ? T : Horse;

const randomHumanUser: UserType<Human> = {
  name: "rakib",
  age: 36,
  address: "Dhaka",
};
const randomHorseUser: UserType<Horse> = {
  name: "rakib",
  age: 36,
};
