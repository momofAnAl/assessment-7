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
//Space complexity: O(n) because the function creates a new Set to store characters from the input word.
//Runtime complexity: O(n) since it loops through each character of the word once
//and each operation within the loop has a constant time complexity, n is the length 
//of the input word


function pangramSentence(sentence){
    //to check if all letters are case sensitive
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let lowercaseSentence = sentence.toLowercase();

    let storeLetters = {};
    for(let char of lowercaseSentence){
        if(lowercaseSentence.indexOf(alphabet[i]) === -1){
            return false;
        }
            
    }
    return true; 
}
//Space complexity: O(n) 
//Runtime complexity: O(n)


function find_longest_word(words){
    let longestWord = 0;

    for(let i=0; i<longestWord.length; i++){
        let word = word[i];
        if(word.length > longestWord){
            longestWord = word.length;
        }
    }
    return longestWord;
}
//Space complexity: O(1) constannt because function only use fixed space to store the longestWord
//Runtime complexity: 0(n) 