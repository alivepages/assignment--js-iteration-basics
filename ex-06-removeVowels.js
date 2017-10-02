/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/


function removeVowels(string) {
  let result = '', cad = ''
  for (let i=0; i<string.length; i++) {
    cad = string[i].toLowerCase();
    if (
      cad !== 'a'
      && cad !== 'e'
      && cad !== 'i'
      && cad !== 'o'
      && cad !== 'u'
    ) {
      result += string[i];
    }
  }
  return result;
}





//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
