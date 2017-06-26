// Write your code here.

const data = require('./data.js').testStrings;
const removeSpaces = (text)=> text.replace(/[^a-zA-Z]/g, '')
const textToLowerCase = (text) => text.toLowerCase()
const isTextPalindrome = (text) => {
    if (text.length < 2) // considring only words and not one letter words
        return false
    let left = 0;
    let right = text.length - 1;
    while(left < right){
        if (text[left++] !== text[right--]){
            return false
        }
    }
    return true
}
   
const isPalindromes = (array) =>{ // we can do better than a for in a for loop.. 
    for (ele of array){
        const sentence = textToLowerCase(ele)
        const sentenceWithOutSpaces = removeSpaces(sentence);
        const words = sentence.split(' ')
        for (let word of words) {
            if (isTextPalindrome(word)){
               console.log(word, `  ---->  it's a palindromes word`);
           }
        }
        if (isTextPalindrome(sentenceWithOutSpaces)){
             console.log(sentence, ` ----> it's a palindromes sentance`);
        }
    }
}

isPalindromes(data) // this fucntion takes Array as type of data

