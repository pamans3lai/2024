//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/discuss

const reverseSeq = (n) => {
	const result = [];
	for(let i=n; i >= 1; i--) {
		result.push(i);
}

return result;
}
console.log(reverseSeq(5));

// const reverseSeq = (n) => [...Array(n)]
//	.map((el, i) => i - 1)
//	.reverse();
