
function checkPalindrome(str) {

    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    document.write("Reverse string will be: " + reverseString +"\n")
    if(string == reverseString) {
         document.write('It is a palindrome');
    }
    else {
         document.write('It is not a palindrome');
    }
}

const string = prompt('Enter a string: ');

checkPalindrome(string);