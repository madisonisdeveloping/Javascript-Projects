// Goal: Tell a user how many characters their tweet is, as well as how many characters they have before they hit the 280 limit.
// Preview here: https://www.codeply.com/p/N5iDfxs7G0

var message = prompt("Write tweet here:");
var maxCharacters = 280;
var charactersLeft = maxCharacters - message.length;

alert("You have written " + message.length + " characters, you have " + charactersLeft+ " characters left.");
