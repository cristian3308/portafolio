// Binary Search Algorithm
// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(arr, 7)); // Output: 3
console.log(binarySearch(arr, 4)); // Output: -1

export default binarySearch;