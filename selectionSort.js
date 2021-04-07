// write a function that takes in an array and sorts it
// selection sort looks for the smallest number and places it to the left of the array

function selectionSort(array) {
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }
    for (let i = 0; i < array.length; i++) {
        let lowest = i  // set first index as lowest first
        for (let j = i+1; j < array.length; j++) {
            let min = array[j]
            if (array[j] < array[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) swap(array, i, lowest)
    }
    return array
}

selectionSort([3,1,23,2,78])