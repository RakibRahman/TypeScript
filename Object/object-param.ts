const obj = {
  a: 15,
  b: 15,
};

const addNumbers = (params: { a: number; b: number }): number => {
  return params.a + params.b;
};

console.log(addNumbers(obj));
