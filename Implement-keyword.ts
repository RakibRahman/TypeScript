interface JutsuInterface {
  interestList: string[];
  // interface cant add private or protected members
}
abstract class Jutsus implements JutsuInterface {
  constructor(protected interest: string[]) {}

  set interestList(interest: string[]) {
    this.interest = interest;
  }
  get interestList() {
    return this.interest;
  }
}
interface ShinobiInterface extends JutsuInterface {
  readonly name: string;
  skills: string[];
  addSkill(skill: string): void;
}
class Shinobi extends Jutsus implements ShinobiInterface {
  public skills: string[] = [];
  constructor(public name: string, public interest: string[]) {
    super(interest);
  }
  public addSkill(skill: string) {
    this.skills.push(skill);
  }
}
const nagato = new Shinobi("Nagato Uzumaki", ["Rinnegan", "large chakra"]);
nagato.addSkill("sealing Jutsus");
console.log(nagato.interest);
