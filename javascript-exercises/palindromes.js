const palindromes = function (word) {
    let reverseWord = word.split('').reverse().join('');
  
    if(word === reverseWord){
      return true;
    }
    else{
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
