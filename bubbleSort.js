// write a funciton that takes in an array and sorts it

function bubbleSort(array) {
    const swap = (array, index1, index2) => { // created a function to swap numbers
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }
    for (let i = array.length; i > 0; i--) { // had i start at end of array, while i is greater than 0, i --
        for (let j = 0; j < i - 1; j++) { //this inner loop then will just compare the 2 numbers, but as we increment the index, we don't have to compare the last index anymore as it has been sorted 
            if (array[j] > array[j+1]) {
                swap(array, j, j+1)
            }
        }

    }
    return array
}

bubbleSort([4,2,1,50,6,3])