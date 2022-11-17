interface GameInfo {
  release: number;
  genres: string[];
}

type GameList = Record<string, GameInfo>;

const gameLists: GameList = {
  "far cry": {
    release: 2000,
    genres: ["open world", "fps"],
  },
  "dying light": {
    release: 2014,
    genres: ["survival", "fps"],
  },
};

console.log(gameLists["far cry"]);

interface FeatureSwitchItem {
  readonly name: string;
  readonly enabled: boolean;
}

type FeatureToggles = Readonly<Record<string, FeatureSwitchItem>>;

const features: FeatureToggles = Object.freeze({
  general: { name: "Lorem.Ipsum.General", enabled: false },
  settings: { name: "Dolor.Sit.Settings", enabled: true },
  user: { name: "Amet.Elit.User", enabled: false },
  time: { name: "Etiam.Neque.Time", enabled: true },
});

//! Check for an empty object

type IsEmpty<T> = T extends Record<string, never> ? true : false;

type Sources = 'salary' | 'bonus' | 'blogging'

type Incomes = Record<Sources, number>

const totalIncome = (salary: Incomes): number => {
  let total = 0;
  for (let m in salary) {

    total += salary[m as keyof Incomes]
  }
  return total;

}

console.log(totalIncome({
  salary: 27000,
  bonus: 0,
  blogging: 0
}));