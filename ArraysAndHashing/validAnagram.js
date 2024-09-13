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

console.log(anagram(s1, s2));
console.log(anagram(s3, s4));
