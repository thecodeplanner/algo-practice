
function pivot(array, start=0, end=array.length-1) {
    function swap(array, i,j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    let pivot = array[start]
    let swapIndex = start

    for (let i = start+1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i)
        }
    }
    swap(array, start, swapIndex)
    return swapIndex

}