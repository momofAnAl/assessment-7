function sumtoZero(nums){
    //convert an array to a set
    let numsArray = new Set(nums);

    for(let num of nums){
    //check if it has negative number 
        if (numsArray.has(-num)){
            return true;
        }
    }
    return false;
}
const testsumtoZero = [1,2,3,4,5,-4];
console.log(sumtoZero(testsumtoZero));
//Space complexity: O(n)
// Runtime complexity: O(n), n this the length of input array,
//and it has loop through each element in the array once.


function uniqCharacters(word){
    let charSet = new Set(); //Sets in JavaScript only store unique values

    for(let char of word){
        if(charSet.has(char)){
            return false;
        }
        charSet.add(char); // adding to prevent duplicate
    }
    return true;
}
const testuniqChar = ("Jerry");
console.log(uniqCharacters(testuniqChar));

//Space complexity: O(n) because the function creates a new Set to store characters from the input word.
//Runtime complexity: O(n) since it loops through each character of the word once
//and each operation within the loop has a constant time complexity, n is the length 
//of the input word


function pangramSentence(sentence){
    //to check if all letters are case sensitive
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let lowercaseSentence = sentence.toLowerCase();

    for(let char of alphabet){
        if(lowercaseSentence.indexOf(char) === -1){
            return false;
        }
            
    }
    return true; 
}
const testSentence = "The quick brown fox jumps over the lazy dog.";
console.log(pangramSentence(testSentence));
//Space complexity: O(n) 
//Runtime complexity: O(n)


function find_longest_word(words){
    let longestWord = 0;

    for(let word of words){
        if(word.length > longestWord){
            longestWord = word.length;
        }
    }
    return longestWord;
}
const testfindLongestWord = ["apple", "watermelon", "pineapple", "strawberry"];
console.log(find_longest_word(testfindLongestWord));
//Space complexity: O(1) constannt because function only use fixed space to store the longestWord
//Runtime complexity: 0(n) 