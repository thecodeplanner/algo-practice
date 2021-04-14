function insertionSort(array) {
    for (let i = 1; i < array.length; i++) { // have i start at 1 and 2nd loop will start and compare always 1 minus i
        let currentVal = array[i];
        let j = i-1
        while (j >= 0 && array[j] > currentVal) { //while value of j is still greater than current value, continue loop
            array[j+1] = array[j] // make and move array[j] to be in index ahead
            j-- // move index down to check other values 
        } array[j+1] = currentVal // update current value so that it will be in index of j's original spot 
    }
    return array
}
                  
insertionSort([1,2,9,35,6])