/*
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
*/

const alphaNum = c => {
    const char = c.charCodeAt(0);
    return (
        (65 <= char && char <= 90) ||
        (97 <= char && char <= 122) ||
        (48 <= char && char <= 57)
    );
};

const validPalindrome = (s) => {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !alphaNum(s[l])) {
            l++;;
        };
        while (r > l && !alphaNum(s[r])) {
            r--;
        };

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        };

        l++;
        r--;
    };
    return true;
};

let s1 = 'racecar';
let s2 = "Was it a car or a cat I saw?";
let s3 = 'r1a2c3e3c2a1r';
let s4 = "tab a cat";

console.log(validPalindrome(s1));
console.log(validPalindrome(s2));
console.log(validPalindrome(s3));
console.log(validPalindrome(s4));
