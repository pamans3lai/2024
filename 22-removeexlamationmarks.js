function removeExclamationMarks(s) {
    let result = '';
    for (let i=0; i < s.length; i++) {
        if (s[i] !== '!') {
            result += s[i];
        }
    }
    return result;
}

console.log(removeExclamationMarks('Hello World'));