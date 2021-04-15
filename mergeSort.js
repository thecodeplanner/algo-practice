function mergeSort(arr1, arr2) {
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