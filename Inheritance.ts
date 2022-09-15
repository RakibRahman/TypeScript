//! Abstract Class
// Abstract keyword will prevent instance creation of a class
//Won't invoke the class,only for extending
abstract class Interest {
  constructor(public interest: string[]) {}

  set interestList(interest: string[]) {
    this.interest = interest;
  }
  get interestList() {
    return this.interest;
  }
}

//! Inheritance
class Ninja extends Interest {
  public skills: string[] = [];
  constructor(public name: string, public interest: string[]) {
    super(interest);
  }
  public addSkill(skill: string) {
    this.skills.push(skill);
  }
}
const minato = new Ninja("Minato", ["flying rajin", "sage mode"]);
minato.addSkill("sealing Jutsus");
console.log(minato.interest);
