interface Developer {
  name: string;
  age: number;
  skills: string[];
  getDetails(): string;
  skillSet(): string;
}
class Dev implements Developer {
  constructor(
    public readonly name: string,
    public age: number,
    public skills: string[]
  ) {
    // no statements required (if we use access modifiers)
  }
  getDetails() {
    return `Dev Name:${this.name} Age:${this.age}`;
  }
  skillSet() {
    return this.skills.toString();
  }
}

const zakir = new Dev("Zakir Hossain", 27, ["C#", "React", "Python"]);
const zakirSkills = zakir.skillSet();
console.log(zakirSkills);
//! example 2
interface Info {
  name: string;
  getInfo(): string;
}
class Employee implements Info {
  constructor(public name: string, private dept: string) {}
  getInfo() {
    return `${this.name} works in ${this.dept}`;
  }
}
class Customer implements Info {
  constructor(public name: string, private city: string) {}
  getInfo() {
    return `${this.name} lives in ${this.city}`;
  }
}
let data: Info[] = [
  new Employee("Rakib", "Web Development"),
  new Customer("Zakir", "Dhaka"),
];

data.forEach((item) => console.log(item.getInfo()));
