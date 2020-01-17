/*
Create arrays of strings that match if rotated. NOT anagrams.
['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris']

[
    [ 'Tokyo', 'Kyoto' ],
    [ 'London', 'Donlon' ],
    [ 'Rome' ],
    [ 'Paris' ]
]
*/

function rotateStringsMatch(arr) {
  let dictionary = {}
  let result = []
  for (let i of arr) {
    dictionary[i.toLowerCase()] = -1
  }
  let counter = 0
  for (let word of Object.keys(dictionary)) {
    if (dictionary[word] === -1) {
      //if we haven't placed this one yet, init a new subArray in the next position available.
      dictionary[word] = counter
      result[counter] = [word]

      let rotatedWord = [...word]
      for (let i = 0; i < rotatedWord.length - 1; i++) {
        let temp = rotatedWord[rotatedWord.length - 1]
        for (let j = rotatedWord.length - 1; j >= 0; j--) {
          if (j > 0) rotatedWord[j] = rotatedWord[j - 1]
          else rotatedWord[j] = temp
        }
        if (dictionary[rotatedWord.join('')]) {
          dictionary[rotatedWord.join('')] = counter
          result[counter].push(rotatedWord.join(''))
        }
      }
      counter++
    }
  }
  return result
}

const input = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris']
const result = rotateStringsMatch(input)

console.log({ result })
