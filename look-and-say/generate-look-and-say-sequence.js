
const evaluateNext = (value) => {
  let nextValue = '';
  let count = 1;

  for(let i=0; i<value.length; i++) {
    if(value[i] !== value[i+1]) {
      nextValue += `${count}${value[i]}`;
      count = 1;
    } else {
      count++;
    }
  }

  return nextValue;
};

const generateSequence = (size) => {
  const sequence = ['1'];
  if (size > 10) {
    return new Error('This is program can only generate up to 10 sequence. Pick a size between 1-10.');
  }

  if (size <= 1) return sequence;

  console.log(sequence[0]);
  for(let i=0; i<size-1; i++) {
    const nextValue = evaluateNext(sequence[i]);
    console.log(nextValue);
    sequence.push(nextValue);
  }

  return sequence;
};

const sequence = generateSequence(10);

// sequence.forEach(value => {
//   console.log(value);
// });

console.log('----------------------------');
// find the nth term
const nthTerm = 2;
console.log(`The ${nthTerm}(nth) term is ${sequence[nthTerm-1]}.`);