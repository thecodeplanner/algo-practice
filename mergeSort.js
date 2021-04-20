// create a function that takes in 2 unsorted arrays and returns 1 sorted array 

function merge(arr1, arr2) {
    let sorted = []
    let i = 0;
    let j = 0;

   while (i < arr1.length && j < arr2.length) {
       if(arr[j] > arr[i]) {
           sorted.push(array1[i]);
           i++;
       }else {
           results.push(arr2[j])
           j++
       }
   }
   while (i < arr1.length) {
       results.push(arr[i])
       i++
   }
   while (j < arr2.length) {
       results.push(arr2[j])
       j++
   }
   return sorted
}

// writing a function recursively 
// time complexity for this is o(n log n)

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // need to always have base case 
    let mid = Math.floor(arr.length/2) // gives us halfway point
    let left = mergeSort(arr.slice(0, mid)); //call mergeSort on left half of array until we reach length of 1. from there we have our left array element
    let right = mergeSort(arr.slice(mid)) // call mergeSort on right half of array until we reach length of less than or equal to 1
    return merge(left, right); // call merge on the left and right numbers and sort them, do this with all numbers in array
}

// mergeSort([10,24,76,73,21,1,9])