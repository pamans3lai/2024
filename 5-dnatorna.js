// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna
  .split('')
  .map((el) => (el === 'T' ? 'U' : el))
  .join('');
}

console.log(DNAtoRNA("GACCGCCGCC")); 