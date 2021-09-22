// Number Type
var cost = 25;
// console.log(cost);
var payment = 22;
//following functions returns a number , so if we return the number as string it will throw an error
var totalCost = function (cost, vat) {
    //   return (cost + 1.5 * vat).toString();
    return cost + 1.5 * vat;
};
var output = totalCost(cost, payment);
console.log(output);
