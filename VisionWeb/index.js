// 1. Determine if an integer/number is a palindrome
function intPalindrome(int) {
  //   reversedInt returns a reversed string of int
    let reversedInt = parseInt(int.split('').reverse().join(''));
  //   regex matcher to make sure only numbers are in input
    let digitOnly = /^\d+$/gm
  
  //   DOM variables
    let palindromeInput = document.getElementById('palindrome-input').value;
    let result = document.getElementById('palindrome-result');
    let resultParent = document.getElementById('palindrome');
    let title = resultParent.appendChild(result);
    
    if (!digitOnly.test(palindromeInput) && palindromeInput.length != 0) {
        result.innerHTML = "Result: Numbers only"
        return title;
  //   conditional checks type to make sure both inputs are numbers
    } else if (parseInt(int) === reversedInt) {
      result.innerHTML = 'Result: True'
      return title;
  // Checks to make sure input is valid length and doesn't match reversed int 
    } else if (parseInt(int) !== reversedInt && palindromeInput.length !== 0) {
      result.innerHTML = 'Result: False'
      return title;
    }
    result.innerHTML = 'Result: No Input'
    return title;
  }
  // Is a palindrome, returns true
  // console.log(intPalindrome(12321)); 
  // Is not a palindrome due to incorrect type, returns false
  // console.log(intPalindrome('12321'));
  // Is not a palindrome, returns false
  // console.log(intPalindrome(1232));
  
  
  // 2. Reversing a string
  function reverseString(str){
    //   DOM variables
    let resultText = document.getElementById('string-result');
    let resultParent = document.getElementById('string-reverse');

  // Condition protects against bad actors
    if (str.length > 0){
  //   Turns str into an array to use the reverse method and joins them back into a string
    let reversedString = str.split(' ').reverse().join(' ');
    resultText.innerHTML = `Result: ${reversedString}`;
    return resultParent.appendChild(resultText);
    }
  }
  
  // // Returns 'World Hello'
  // console.log(reverseString('Hello World'));
  // // Returns 'string a is This'
  // console.log(reverseString('This is a string'))
  
  
  // 3. Filter zeros out of an array
  function filterZero(input) {
    //   DOM variables
    let resultText = document.getElementById('filter-result');
    let resultParent = document.getElementById('filter-zero');

    let array = input.split(',');
    // Regex to validate correct data
    let arrayFormat = /(\d,?\d?,)+\d/
    
    if (arrayFormat.test(array.toString())){
  //   Iterates through the array, filters out and returns items that do not equal 0
    let filtered = array.filter(item => item != 0).join(', ');
    resultText.innerHTML = `Result: [${filtered}]`;
    return resultParent.appendChild(resultText);
    } else if (!arrayFormat.test(array.toString())) {
      resultText.innerHTML = `Results: Wrong Format`;
      return resultParent.appendChild(resultText)
    }
  }
  
  // // Returns [1, 2, 5, 50]
  // console.log(filterZero([1, 2, 0, 0, 5, 50]));
  // // Returns null if array is empty
  // console.log(filterZero([]))