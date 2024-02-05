// 4# sentence words
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

function smash (words) {

	return words.join(' ');
}

console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence' ]));

//const smash = (words) => words.join(' ');
//
//function smash(words) {
//	let result = '';
//	for (let i = 0; i < words.length; i++) {
//		result += words[i];
//		if (i != words.lenght -1) result += ' ';
//	}
//	return result;
//	}

