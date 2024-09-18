/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
*/

const kEle = (nums, k) => {
    const count = {};
    const freq = Array.from ({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    for (const n in count) {
        freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for (let i = freq.length; i > 0; i--) {
        if (freq[i]) {
            for (const n of freq[i]) {
                // console.log('freq i', freq[i])
                res.push(n);
                if (res.length === k){
                    return res;
                }
            }
        }
    }
}

// let nums1 = [1, 2, 3, 4, 5, 5, 6, 6];
// let k1 = 2;
let nums3 = [1, 2, 1, 1, 3, 4, 4];
let k2 = 2;

// console.log(kEle(nums1, k1));
console.log(kEle(nums3, k2));

const KEle2 = (anotherNums, someK) => {
    const count = {};
    const freq = Array.from({ length: anotherNums + 1}, () => []);

    for (const n of anotherNums) {
        count[n] = (count[n] || 0) + 1;
    };
    for (const n in count) {
        freq[count[n]].push(parseInt(n));
    };

    const res = [];
    for (let i = freq.length; i > 0; i--) {
        if (freq[i]) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === someK) {
                    return res;
                };
            };
        };
    };
};
