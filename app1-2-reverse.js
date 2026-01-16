function reverseArray(arr) {
    const result = [];
    for (let i = arr.length -1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

const arr = [6, 7, 8, 9, 10];
console.log(reverseArray(arr));

let tableau = [1, 2, 3, 4, 5];
console.log(tableau[tableau.length-1]);