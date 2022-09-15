//? The const assertion tells the compiler to infer the narrowest / most specific type it can for an expression.

const USER_ROLES = ["admin", "regular", "moderator"] as const; // same as readonly

const BREAKPOINTS = {
  phones: [0, 720],
  tablets: [721, 959],
  desktops: [960, 1199],
} as const; // makes all key:value pair readonly

//? const assertion guarantees us that TypeScript will give a compile time error if we try to mutate the object.
