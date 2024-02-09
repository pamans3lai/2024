// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript


var min = function(list){
    let minValue = list [0];
    for (let i = 1; i < list.length; i++) {
      if (minValue > list[i]) {
        minValue = list[i];
      }
    }
  return minValue;
}

var max = function(list){
  let maxValue = list [0];
    for (let i = 1; i < list.length; i++) {
      if (maxValue < list[i]) {
        maxValue = list[i];
      }
    }
  return maxValue;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(max([-52, 56, 30, 29, -54, 0, -110]), -110);