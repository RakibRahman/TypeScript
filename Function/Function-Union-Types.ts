// Unions => Use when return type doesn’t change;
type Pet = {
  name: string;
};

type PetOwner = {
  name: string;
  pet: Pet;
};

const getName = (petOrOwner: Pet | PetOwner): string => {
  if ("pet" in petOrOwner) {
    return petOrOwner.pet.name;
  }
  return petOrOwner.name;
};

console.log(getName({ name: "badsha" }));
console.log(
  getName({
    name: "badsha",
    pet: {
      name: "duplicate",
    },
  })
);
