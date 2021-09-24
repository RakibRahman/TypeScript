type Menu = {
  name: string;
  links: string[];
};

let menu: Menu;

const createMenu = (name: string, links: string[]): Menu => {
  return {
    name,
    links,
  };
};

menu = createMenu("Nav", ["home", "about"]);
console.log(menu);

//! Interface
// interface is recommended for complex data structures or data set
//Defines the shape or structure of a object
interface Pizza {
  name: string;
  sizes: string[];
}

let foodItem: Pizza;

const createFoodItem = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes,
  };
};
foodItem = createFoodItem("Birayani", ["eggs", "rice"]);
console.log(foodItem);
