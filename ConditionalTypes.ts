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
