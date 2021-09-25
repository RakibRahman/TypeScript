class Person {
  public skills: string[] = [];
  constructor(public name: string) {}
  public addSkill(skill: string) {
    this.skills.push(skill);
  }
}

const Minato = new Person("Minato Namikaze");
console.log(Minato.name);
Minato.addSkill("Teleportation");
Minato.addSkill("Sealing Jutsus");
Minato.addSkill("Sage mode");

const skillSet = Minato.skills;
for (let skill of skillSet) {
  console.log(skill);
}
