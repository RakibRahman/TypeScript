// The idea of the index signatures is to type objects of unknown structure when the only thing you know is the key and value types.
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000,
};

const salary2 = {
  contractSalary: 110_000,
};

const totalSalary = (salaryObject: { [key: string]: number }): number => {
  let total = 0;
  for (let salary in salaryObject) {
    total += salaryObject[salary];
  }
  return total;
};
console.log(totalSalary(salary1));
