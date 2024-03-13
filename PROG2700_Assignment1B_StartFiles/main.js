/*
Name: bryn Norwood
Date: March 9, 2024

* PHONEWORDS
* Write a function that will take a phone word (vanity number) and return the correct telephone number.
* The number pad looks like the following:
* https://en.wikipedia.org/wiki/Telephone_keypad#/media/File:Telephone-keypad2.svg
*
* RULES
* Given a phoneword:
* 1. Ignore any non-alphanumeric characters (), -, etc.
* 2. Keep any existing digits
* 3. Resolve a letter to a number according to the keypad image
* 4. All your code must be contained in the section outlined below
*/


var buttons = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"] //DO NOT MODIFY


// YOU CAN ADD TO AND MODIFY THE CODE BELOW THIS LINE
//   |
//   V


function convertPhoneWord(phoneWord) {

    //Enter your code in this function body
    let keypad = {
        'A': '2', 'B': '2', 'C': '2',
        'D': '3', 'E': '3', 'F': '3',
        'G': '4', 'H': '4', 'I': '4',
        'J': '5', 'K': '5', 'L': '5',
        'M': '6', 'N': '6', 'O': '6',
        'P': '7', 'Q': '7', 'R': '7', 'S': '7',
        'T': '8', 'U': '8', 'V': '8',
        'W': '9', 'X': '9', 'Y': '9', 'Z': '9'

    };
     let phoneNum = "";

     for (var i = 0; i < phoneWord.length; i++) {
        var character = phoneWord[i].toUpperCase();
        if (isDigit(character)) {
            phoneNum += character;
        } else if (isLetter(character)) {
            phoneNum += keypad[character];
        }
    }
    return phoneNum;

}

//    ^
//    |
//YOU CAN ADD TO OR MODIFY THE CODE ABOVE THIS LINE




// DO NOT CHANGE ANY CODE AFTER THIS LINE.
//     |
//     |
//     V

//helper functions...do not modify, but you can use them in your code
function isDigit(character) {
    return "0123456789".indexOf(character) !== -1;
}

function isLetter(character) {
    character = character.toUpperCase();    
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(character) !== -1;
}




testCode();