// Algo Practice Problems and Solutions!


// Given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {  // if strings are not same length, this should return false 
        return false
    }
    let checkLetters = {}
    for (let i = 0; i < string1.length; i++) {
        let letters = string1[i]
        checkLetters[letters] ? checkLetters[letters] += 1 : checkLetters[letters] = 1
    }
    for (let i = 0; i < string2.length; i++) {
        let letters = string2[i]
        // if can't find letter or letter is 0, then not an anagram
        if (!checkLetters[letters]) {
            return false
        } else {
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
        for (let j = i + 1; j < integerArray.length; j++) {
            if (integer[i] + integer[j] === 0) {
                return [integer[i], integer[j]]
            }
        }
    }
}

//solution for using two pointers below where time complexity is O(N)

function sumZero(integerArray) {
    let left = 0;
    let right = integerArray.length - 1;
    while (left < right) { // need this so that indices do not overlap and create false positive
        let sum = integerArray[left] + integerArray[right];
        if (sum === 0) {
            return [integerArray[left], integerArray[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}



// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average pair equals the target average. 

function averagePair(nums, target) {
    let first = 0;
    let second = nums.length - 1
    while (first < second) {
        let average = (nums[first] + nums[second]) / 2
        if (average === target) { // if equal, return true
            return true
        } else if (average < target) { // if average is less, than move first pointer up
            first++
        } else { // if average is more than target, move second pointer down
            second--
        }
    } return false

}







// Implement function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(array) {
    if (array.length === 0) return 0; // in case of empty array, want to return 0 not 1
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
    } let uniqueNums = i + 1 // grab the index and add 1 for number of unique values
    return uniqueNums
}




// Wtie a function called maxSubarraySum, which accepts an array of integers and a number called n. The function should calculate the maxixmum sum of n consecutive elements in the array. 
// below is O (N^2) time complexity as it involves nested loop

function maxSubarraySum(array, num) {
    if (num > array.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < array.length - num + 1; i++) {
        let temp = 0
        for (let j = 0; j < num; j++) {
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
    for (let i = 0; i < num; i++) {
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
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } else {
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
        } else if (array[middle] > value) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1
}


/// Factorial Recusion

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

// Non-recursive - iterative --

function factorial(num) {
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total
}


// isPalindrome Recursive 

function isPalindrome(string) {
    if (string.length === 1) return true
    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.slice(1, -1))
    }
    return false
}

// isPalindrome Iterative 

function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - i - 1]) return false
    }
    return true
}


// capitalizeFirst 
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array. 
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)]; // grab first word in array and then first character and capitalize
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

// function capitalizeWords (array) {
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;

//   }  


// below is what functionOf is doing essentially .. looping through each element one by one to search for element

function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    } return -1
}

// Binary Search is faster and can be more efficient 
// has a divde and conquer approach - instead of going through each element individually, we can compare and decide from a middle point if the element we are looking for is greater or larger
// this only works with sorted arrays!!!

// write a binary search which acepts a sorted array and a value and returns the index at which the value exists, otherwise return -1

// ex: binarySearch([1,2,4,5,7,8], 5) // 3

function binarySearch(array, value) {
    let left = 0
    let right = array.length - 1
    let middle = Math.floor((left + right) / 2)

    while (left < right && array[middle] != value) {
        if (array[middle] > value) {
            right = middle - 1
        } else if (array[middle] < value) {
            left = middle + 1
        } middle = Math.floor((left + right) / 2)
    } if (array[middle] === value) {
        return middle
    } return -1
}


// write a function that takes in 2 strings. return the number of times the pattern appears in string 1

function stringSearch(string1, string2) {
    let count = 0
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string2[j] != string1[i+j]) {
                break
            } if (j === string2.length - 1) {
                count+=1
            }
        }
    }return count
}
stringSearch('catastrophic', 'tast')