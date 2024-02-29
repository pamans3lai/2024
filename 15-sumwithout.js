// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript?filter=all&sort=clever&invalids=false

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0