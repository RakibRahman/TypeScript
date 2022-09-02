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
