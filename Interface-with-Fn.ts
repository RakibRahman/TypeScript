interface Genres {
  genres: string[];
}
//! Extending Interfaces

interface Games extends Genres {
  name: string;
  getGenres(): string[];
  year?: number;
  [key: number]: string;
}
// with type
// type getGenres = () => string[];

let game: Games;

const gameList = (name: string, genres: string[]) => {
  return {
    name,
    genres,
    getGenres() {
      return this.genres;
    },
  } as Games;
};
game = gameList("far cry 3", ["rpg", "fps", "adventure"]);
console.log(game.name);
console.log(game.getGenres());
game.year = 2013;
game[1] = "rt";
console.log(game);
