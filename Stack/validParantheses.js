/*

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

*/

const validP = (s) => {
    const stack = [];
    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (const char of s) {
        const isBracket = char in map;
        if (!isBracket) {
            stack.push(char);
            console.log('not in map:', char)
            continue;
        };

        console.log('map[char]', map[char])

        const isEqual = stack[stack.length - 1] === map[char];
        if (isEqual) {
            stack.pop();
            continue;
        };

        return false;
    };

    return stack.length === 0;

};


let s1 = "[]";
let s2 = '([{}])';
let s3 = '[(])';
let s4 = '[{}[]()[{}]]'

console.log(validP(s1));
// console.log(validP(s2));
// console.log(validP(s3));
// console.log(validP(s4));
