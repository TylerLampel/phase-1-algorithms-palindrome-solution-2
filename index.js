function isPalindrome(word) {
  // iterate from the beginning to middle
  for (let i = 0; i < word.length / 2; i++) {
    // check each letter to corresponding letter from end
    const j = word.length - 1 - i;
    // if any letters dont match return false
    if (word[i] !== word[j]) return false;
  }
  return true;
}

/* 
  iterate from the beginning to the middle
  check each character to the corresponding letter from the end
  if any letters dont match, return false

  return true
*/

/*
  make a function that returns true if a word is a palindrome. that means if the first letter
  is the same as the last, the 2nd is the same as the 2nd to last, etc. until we reach the middle
  return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
