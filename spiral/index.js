
/*
  directions:
  1: col+1, same row
  2: same col, row+1
  3: col-1, same row
  4: same col, row-1
*/


const directions = [
  {
    name: 'l-r',
    computeRow: (currentRow) => currentRow,
    computeColumn: (currentColumn) => currentColumn+1,
    nextDirection: (currentRow, currentColumn, iteration, size) => currentColumn+1+iteration === size,
  },
  {
    name: 't-b',
    computeRow: (currentRow) => currentRow+1,
    computeColumn: (currentColumn) => currentColumn,
    nextDirection: (currentRow, currentColumn, iteration, size) => (currentRow+1+iteration) === size,
  },
  {
    name: 'r-l',
    computeRow: (currentRow) => currentRow,
    computeColumn: (currentColumn) => currentColumn-1,
    nextDirection: (currentRow, currentColumn, iteration, size) => currentColumn-iteration === 0,
  },
  {
    name: 'b-t',
    computeRow: (currentRow) => currentRow-1,
    computeColumn: (currentColumn) => currentColumn,
    nextDirection: (currentRow, currentColumn, iteration, size) => currentRow-1-iteration === 0 ,
  },
];


function generateSpiral(size) {

    const matrix = [];
    const limit = size*size; // 3*3 = 9
    const directionLimit = (size*2)-1; // 3*2=6-1=5
    let rowIndex = 0;
    let colIndex = 0;
    let val = 0;
    let iteration = 0;

    while(val < limit) {
      directions.forEach(direction => {
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
}

const rows = generateSpiral(4);

rows.forEach(row => {
  // console.log(row.toString());
  console.log(row.reduce((concatenatedRow, col) => `${concatenatedRow} ${col < 10 ? '0' : ''}${col}`, ''));
});