
const oneEditAway = (word1, word2) => {
  if (!word1 || !word2) return false;

  const sameLength = word1.length === word2.length;

  if (!sameLength) {
    ({ word1, word2 } = swap({word1, word2}));
  }
  const length = word1.length ;

  let diffCount = 0;
  let skipOneChar = false;
  for(let i=0; i<length; i++) {
    if (word1[i] !== word2[i]) {
      if (sameLength || skipOneChar) {
        diffCount++;
      } else {
        word1 = word1.slice(0, i) + word1.slice(i+1);
        skipOneChar = true;
        --i;
      }
    }

    if (diffCount > 1) return false;
  }

  return true;
};

const swap = ({word1, word2}) => {
  return {
    word1: word2.length > word1.length ? word2 : word1,
    word2: word2.length > word1.length ? word1 : word2};
};


console.log(oneEditAway('cat', 'dog')); //false
console.log(oneEditAway('cat', 'cats')); //true
console.log(oneEditAway('cat', 'cut')); //true
console.log(oneEditAway('cat', 'cast')); //true
console.log(oneEditAway('cat', 'at')); //true
console.log(oneEditAway('cat', 'act')); //false
console.log(oneEditAway('cat', 'cuts')); //false
console.log(oneEditAway('cuts', 'cat')); //false
