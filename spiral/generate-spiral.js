const { SpiralDirections } = require('./directions');

const generateSpiral = (size) => {

    const matrix = [];
    const limit = size*size; // 3*3 = 9
    const directionLimit = (size*2)-1; // 3*2=6-1=5
    let rowIndex = 0;
    let colIndex = 0;
    let val = 0;
    let iteration = 0;

    while(val < limit) {
      SpiralDirections.SQUARE.forEach(direction => {
        while(!direction.nextDirection(rowIndex, colIndex, iteration, size) && val < limit) {

          if (!matrix[rowIndex]) matrix[rowIndex] = [];

          matrix[rowIndex][colIndex] = ++val;
          rowIndex = direction.computeRow(rowIndex);
          colIndex = direction.computeColumn(colIndex);
        }
      });

      iteration++;
    }
  return matrix;
};

const rows = generateSpiral(4);

rows.forEach(row => {
  // console.log(row.toString());
  console.log(row.reduce((concatenatedRow, col) => `${concatenatedRow} ${col < 10 ? '0' : ''}${col}`, ''));
});


/*
  Questions:
  1) Will this solution work on rectangular matrix?
*/