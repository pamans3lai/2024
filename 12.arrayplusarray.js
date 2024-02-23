// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
//  return arr1 + arr2; //something went wrong


let total = 0;
for(let i=0; i<arguments.length; i++) {
    for(let j = 0; j < arguments[i].length; j++) {
        total += arguments [i][j];
    }
}

return total
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);