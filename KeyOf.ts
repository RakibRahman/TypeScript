interface Person {
  name: string;
  DOB: string;
  job: string;
}

type PersonInfo = keyof Person;

let personName: PersonInfo = "name";

interface Letters {
  a: number;
  b: string;
  c: {
    name: string;
  };
}

type LetterAsUnion = Letters[keyof Letters];


const key: keyof { a: string; b: string } = 'a'


// Type restriction using extends
type GetKeys<T extends { a: string; b: string }> = keyof T

const keyofExample1: GetKeys<{ a: string, b: string }> = 'a'
// const keyofExample2: GetKeys<[1, 2]> = 'a' //wont compile
