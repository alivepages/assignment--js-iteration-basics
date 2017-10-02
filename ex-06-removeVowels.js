/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/

function isVowel(letter) {
  const VOWELS = 'aeiouáéíóú'
  let lettterLower = letter.toLowerCase()
  if (VOWELS.indexOf(lettterLower) >= 0) {
    return true
  }
  return false;
}

function removeVowels(string) {
  let result = ''
  for (let i=0; i<string.length; i++) {
    let letter = string[i]
    if (!isVowel(letter)) {
      result += string[i]
    }
  }
  return result
}





//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
