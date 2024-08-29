function insertionSort(arr) {
    // Iterate from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be inserted
        let j = i - 1; // Index of the last element in the sorted portion

        // Shift elements of the sorted portion to the right if they are greater than the key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into the correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
const array = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
