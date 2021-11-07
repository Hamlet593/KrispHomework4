/*The ABACABA pattern is a recursive fractal pattern that shows up in many places in the real world 
(such as in geometry, art, music, poetry, number systems, literature and higher dimensions).
Create a function that takes a number nas an argument and returns a string that represents the full pattern.

abacabaPattern(1) ➞ "A"
abacabaPattern(2) ➞ "ABA"
abacabaPattern(3) ➞ "ABACABA"*/


const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function abacabaPattern(n){
  if(n <= 0){
    return '';
  }
  else {
    return abacabaPattern(n - 1) + alphabet[n - 1] + abacabaPattern(n - 1);
  }
}

console.log(abacabaPattern(4))


// *optimizing with memo

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function abacabaPattern(n, memory = {}){
  if(n <= 0){
    return '';
  }
  if(memory[n]){
    return memory[n];
  }
  else {
    return memory[n] = abacabaPattern((n - 1), memory) + alphabet[n - 1] + abacabaPattern((n - 1), memory);
  }
}

console.log(abacabaPattern(4))