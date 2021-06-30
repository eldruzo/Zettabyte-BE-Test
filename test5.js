/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

const result = (words) => {
  const results = [];

  words.forEach((word) => {
    results.push({
      word: word,
      prefix: word.substring(0,2)
    });  
  });

  return results;
}

console.log(result(words));
