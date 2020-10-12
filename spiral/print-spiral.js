const { SpiralDirections } = require('./directions');

const printInSpiral = (matrix) => {
  if (!matrix) return;

  //get size of the matrix, assume to be a square matrix for now
  const size = matrix.length;
  const totalNumberOfValues = size*size;
  let val = 0;
  let rowIndex = 0;
  let colIndex = 0;
  let iteration = 0;
  let spiralToPrint = '';

  while(val < totalNumberOfValues) {
    SpiralDirections.SQUARE.forEach(direction => {
      while(!direction.nextDirection(rowIndex, colIndex, iteration, size) && val < totalNumberOfValues) {
        ++val;
        // console.log(matrix[rowIndex][colIndex]);
        spiralToPrint += `${matrix[rowIndex][colIndex]} `;
        rowIndex = direction.computeRow(rowIndex);
        colIndex = direction.computeColumn(colIndex);
      }
    });

    iteration++;
  }

  console.log(spiralToPrint);
};


const givenMatrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

//expected output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

printInSpiral(givenMatrix);

/*
Questions:
  1) Will this solution work on rectangular matrix?
*/