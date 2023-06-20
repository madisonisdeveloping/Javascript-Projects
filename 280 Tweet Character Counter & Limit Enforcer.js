// Goal: Splice a user's tweet if the character limit exceeds 280 characters, as well as show at which point the tweet will be cut off.
// Try it here: www.codeply.com/p/ryGkfeuoZR

var message = prompt("Compose tweet here:");
var messageSliced = message.slice(0,280);
alert("You have written " + messageSliced.length + " characters, you have " + (280 - messageSliced.length) + " characters left.");
if (message.length > 280) {
    alert("Your tweet will be cut off here: \n" + messageSliced)
}
