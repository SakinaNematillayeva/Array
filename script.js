var word = prompt("Enter word").trim();

if (word === "") {
  alert("You should enter word");
} else if (word === word.toUpperCase()) {
  alert(word.toLowerCase());
} else {
  alert(word.toUpperCase());
}
