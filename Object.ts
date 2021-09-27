enum Colors {
  Blue = "blue",
  Green = "green",
}
const ColorsObj = {
  Blue: "blue",
  Green: "green",
} as const;

type CLR = "blue" | "green";
const showColors = (color: CLR) => console.log(color);

console.log(showColors(Colors.Green));
console.log(showColors("green"));
console.log(showColors(ColorsObj.Blue));
