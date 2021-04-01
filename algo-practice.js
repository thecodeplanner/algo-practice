// Algo Practice Problems and Solutions!


// Given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(string1, string2){
    if (string1.length !== string2.length) {  // if strings are not same length, this should return false 
        return false
    }
    let checkLetters = {}
    for(let i = 0; i < string1.length; i++) {
        let letters = string1[i]
        checkLetters[letters] ? checkLetters[letters] += 1 : checkLetters[letters] = 1
    }
    for (let i = 0; i < string2.length; i++) {
        let letters = string2[i]
        // if can't find letter or letter is 0, then not an anagram
        if (!checkLetters[letters]) {
            return false
        }else {
            checkLetters[letters] -= 1
        }
    }
    return true
  }
  
  // validAnagram(iceman, cinema)



  // Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefine if a pair does not exist. 

  // naive solution below -- this is o(n^2) and requires nested loop
  function sumZero(integerArray) {
      for (let i = 0; i < integerArray.length; i++) {
          for (let j = i+1; j < integerArray.length; j++){
              if (integer[i] + integer[j] === 0) {
                  return [integer[i], integer[j]]
              }
          }
      }
  }

  //solution for using two pointers below where time complexity is O(N)

  function sumZero(integerArray) {
      let left = 0;
      let right = integerArray.length-1;
      while (left < right) { // need this so that indices do not overlap and create false positive
          let sum = integerArray[left] + integerArray[right];
          if (sum === 0) {
              return [integerArray[left], integerArray[right]]
          }else if (sum > 0) {
              right--
          }else {
              left++
          }
      }
  }


  // Implement function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be neative numbers in the array, but it will always be sorted.

  function countUniqueValues(array) {
      if (array.length === 0) return 0; // in case of empty array, want to return 0 not 1
      let i = 0;
      for (let j = 1; j < array.length; j++) {
          if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
          }
      } let uniqueNums = i + 1 // grab the index and add 1 for number off unique values
      return uniqueNums
  }




  // Wtie a function called maxSubarraySum, which accepts an array of integers and a number called n. The function should calculate the maxixmum sum of n consecutive elements in the array. 
  // below is O (N^2) time complexity as it involves nested loop

  function maxSubarraySum(array, num) {
      if (num > array.length) {
          return null;
      }
      let max = -Infinity ;
      for(let i = 0; i < array.length - num+1; i++) {
          let temp = 0
          for(let j = 0; j < num; j++) {
              temp += array[i + j]
          }
          if (temp > max) {
              max = temp;
          }
      }
      return max;
  }

// Sliding window approach, useful for keeping track of a subset of data in an array/string, etc.
// more efficient approach as time complexity is O(N)

function maxSubarraySum(array, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (array.length < num) return null;
    for (let i = 0; i < array.length; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum;
    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i]; // sliding window allows you to subtract from first index and add last index as we move up the array
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}



// Divide and Conquer - Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
// search([1,2,3,4,5,6], 4) // 3 

function search(array, value) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }else {
            return -1
        }
    }
}

// another solution would be binary search

function search(array, value) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle];

        if (array[middle] < value) {
            min = middle + 1;
        }else if (array[middle] > value) {
            max = middle - 1;
        }else {
            return middle
        }
    }
    return -1
}

