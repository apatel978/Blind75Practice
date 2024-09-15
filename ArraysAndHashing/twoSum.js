// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.


const twoSum = (nums, target) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let num2 = target - num;
        let complementIdx = map.get(num2);

        let sumFound = map.has(complementIdx);

        if (sumFound) {
            return [complementIdx, i];
        };

        map.set(num, i);
    };

    return false;
}

const numArr = [1, 2, 4, 6, 7, 8];
const t1 = 9;

const nums2 = [1, 4, 7, 8, 9];
const t2 = 11;

const nums3 = [7, 8, 3, 0];
const t3 = 100;

console.log(twoSum(numArr, t1));
console.log(twoSum(nums2, t2));
console.log(twoSum(nums3, t3));
