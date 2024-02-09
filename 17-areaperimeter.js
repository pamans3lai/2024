// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// 17/366

// const areaPerimeter = function (x, y) {
//     if (x === y) {
//         return x * y;
// } else {
//     2 * (x + y);
// }
// }

// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// 17/366

const areaPerimeter = function (x, y) {
    return x === y ? x * y : 2 * (x + y);
}
// const areaPerimeter = (x, y) => (x === y ? x * y : 2 * (x + y));
console.log(areaPerimeter(4, 4));