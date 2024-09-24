// Given an integer array of nums, return true if any value appears more than once in the array, otherwise return false

// Ex 1

// Input: nums = [1, 2, 3, 4]
// Output: false

// Ex 2

// Input: nums = [1, 2, 3, 3]
// Output: true

function dupeCheck(nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (obj[num] === undefined) {
            obj[num] = 1
        } else {
            obj[num] ++
        };

        if (obj[num] === 2) {
            return true
        };
    };

    return false;
};

let arr = [1, 2, 3, 3];
let arr2 = [1, 2, 3, 4]

// console.log(dupeCheck(arr));
// console.log(dupeCheck(arr2));

const checkDupe = (nums) => {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num]++;
        };

        if (obj[num] === 2) {
            return true;
        };
    };

    return false;
};

console.log(checkDupe(arr));
console.log(checkDupe(arr2))
