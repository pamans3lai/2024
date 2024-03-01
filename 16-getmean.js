// https://www.codewars.com/kata/563e320cee5dddcf77000158
// 16/366
// https://www.youtube.com/watch?v=mwXQgoftwtw&t=373s


function getAverage(marks) {
	let total  = 0;
	for (let i = 0; i < marks.length; i++) {
		total += marks[i];
	}
	return Math.floor(total / marks.length);


}

console.log(getAverage([1, 2, 3, 4, 5]));
