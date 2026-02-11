var word = prompt("Enter word");

var word1 = word[0];
var next = word.slice(1);

if (word1 === word1.toUpperCase()) {
  word1 = word1.toLowerCase();
} else {
  word1 = word1.toUpperCase();
}

alert(word1 + next);
