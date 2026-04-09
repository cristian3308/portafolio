// Quicksort Algorithm
// Time Complexity: O(n log n) average, O(n^2) worst case
// Space Complexity: O(log n) due to recursion

function quicksort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quicksort(arr)); // Output: [1, 1, 2, 3, 6, 8, 10]

export default quicksort;