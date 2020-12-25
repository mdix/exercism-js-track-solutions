const ROW_SEPARATOR = '\n';
const COLUMN_SEPARATOR = ' ';

export class Matrix {
  constructor(matrix) {
    if (!(typeof matrix === 'string')) {
      throw new TypeError('matrix needs to be provided as a string with newlines for each row and spaces between numbers');
    }

    this._matrix = matrix;
  }

  get rows() {
    if (!this._rows) {
      this._rows = this.calculateRows();
    }

    return this._rows;
  }

  get columns() {
    if (!this._columns) {
      this._columns = this.calculateColumns();
    }

    return this._columns;
  }

  calculateRows() {
    return this._matrix
      .split(ROW_SEPARATOR)
      .map((row) => {
        return row
          .split(COLUMN_SEPARATOR)
          .map(number => Number(number))
      });
  }

  calculateColumns() {
    return this.rows
      .reduce((acc, row) => {

        row.map((number, index) => {
          if (!Array.isArray(acc[index])) acc[index] = [];
          acc[index].push(number);
        });

        return acc;
      }, []);
  }
}
