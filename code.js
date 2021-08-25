function positiveSum(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total = total + arr[i];
        }
    }
    return total;
}

console.log(positiveSum([1,2,3,4,5])); // returns 15
console.log(positiveSum([1,-2,3,4,5])); // returns 13
console.log(positiveSum([])); // returns 0
console.log(positiveSum([-1,-2,-3,-4,-5])); // returns 0
console.log(positiveSum([-1,-2,3,4,-5])); // returns 9