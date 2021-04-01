// Algo Practice Problems and Solutions 

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