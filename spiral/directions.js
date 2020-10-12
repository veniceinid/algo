/*
  Spiral Directions:
  1: col+1, same row
  2: same col, row+1
  3: col-1, same row
  4: same col, row-1
*/



module.exports = {
  SpiralDirections: {
        SQUARE: [
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
    ],
    RECTANGLE: []
  }
};
