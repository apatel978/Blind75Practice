//  Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
//  An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


function anagram (str1, str2) {
    if (str1.length !== str2.length) return false;

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
        let letter = arr1[i];
        if (letter !== arr2[i]) {
            return false;
        };
    };

    return true;
}

let s1 = 'racecar';
let s2 = 'carrace';

let s3 = 'jam';
let s4 = 'jar';

// console.log(anagram(s1, s2));
// console.log(anagram(s3, s4));

const blind75Anagram = (s, t) => {
    if (s.length !== t.length) return false;

    let sObj = {};
    let tObj = {};

    for (let i = 0; i < s.length; i++) {
        let Schar = s[i];
        let tChar = t[i]

        if (sObj[Schar] === undefined) {
            sObj[Schar] = 1;
        } else {
            sObj[Schar]++;
        };

        if (tObj[tChar] === undefined) {
            tObj[tChar] = 1;
        } else {
            tObj[tChar]++;
        };
    };

    for (const key in sObj) {
        if (sObj[key] !== tObj[key]) {
            return false;
        };
    };

    return true;
};

console.log(blind75Anagram(s1, s2));
console.log(blind75Anagram(s3, s4));
