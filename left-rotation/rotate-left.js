
// using array methods
const rotateLeft = (size, rotation) => {
  const rotatedArray = generateArray(size);
  console.log(`Rotate array ${rotation} times to the left: `);
  console.log(rotatedArray.reduce((concatenated, element) => `${concatenated} ${element}`, ''));

  for(let i=0; i<rotation; i++) {
    rotatedArray.push(rotatedArray.shift());
  }

  return rotatedArray;
};

// old school loop
const rotateLeftAlternate =  (size, rotation) => {
  const rotatedArray = generateArray(size);
  console.log(`Rotate array ${rotation} times to the left: `);
  console.log(rotatedArray.reduce((concatenated, element) => `${concatenated} ${element}`, ''));

  for(let i=0; i<rotation; i++) {
    const top = rotatedArray[0];
    for(let j=0; j<size; j++) {
      rotatedArray[j] = rotatedArray[j+1];
    }
    rotatedArray[size-1] = top;
  }

  return rotatedArray;
};

const generateArray = (size) => {
  const arr = [];
  for(let i=1; i<=size; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(rotateLeft(5, 4).reduce((concatenated, element) => `${concatenated} ${element}`, ''));
console.log(rotateLeftAlternate(5, 4).reduce((concatenated, element) => `${concatenated} ${element}`, ''));

/*
  Questions:
  1) Can I use pop and push function of javascript array?
 */