// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// 23/366

function monkeyCount(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

console.log(monkeyCount(10));