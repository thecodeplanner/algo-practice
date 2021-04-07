// write a function that takes in an array and sorts it
// bubble sort compares the first number on the left and goes through each element in the array
// if element is larger, it swaps until the largest element bubbles up to the right
// effective if array is already mostly sorted

function bubbleSort(array) {
    const swap = (array, index1, index2) => { // created a function to swap numbers
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }
    for (let i = array.length; i > 0; i--) { // had i start at end of array, while i is greater than 0, i --
        let noSwaps = true 
        for (let j = 0; j < i - 1; j++) { //this inner loop then will just compare the 2 numbers, but as we increment the index, we don't have to compare the last index anymore as it has been sorted 
            // console.log(array, array[j], array[j+1])
            if (array[j] > array[j+1]) {
                swap(array, j, j+1)
                noSwaps = false
            }
        }
        if (noSwaps) break // this is so that if there are no more comparisons, we can break out of the loop early 

    }
    return array
}

bubbleSort([4,2,1,50,6,3])