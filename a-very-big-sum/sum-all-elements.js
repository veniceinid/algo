

const aVeryBigSum = (numbers) => {
  if (!numbers || numbers.length > 10 || numbers.length < 1)
    throw new Error('Invalid array.  Length should be from 1 to 10.');
  let sum = 0;

  numbers.forEach(number => {
    sum += number;
  });

  return sum;
};

const numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(numbers));

const alternateAVeryBigSum = (numbers) => {
  if (!numbers || numbers.length > 10 || numbers.length < 1)
    throw new Error('Invalid array.  Length should be from 1 to 10.');
  
  return numbers.reduce((sum, number) => sum + number );
};

console.log(alternateAVeryBigSum(numbers));

/*
Questions:
1) Is it necessary to check for the length of the array given it was mentioned in the constraints?
*/