function reverseArray(arr) {
    if (arr.length === 0) return [];
    return [arr[arr.length-1], ...reverseArray(arr.slice(0, -1))];
}

const arr = [11, 12, 13, 14, 15];
console.log(reverseArray(arr));