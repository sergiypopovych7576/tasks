const rowValid = (board, row) => {
    let valid = true;
    const rowValues = [];

    for (let i = 0; i < 9; i++) {
        const el = board[row][i];

        if (el === '.') {
            continue;
        }

        rowValues.push(el);
    }

    const set = new Set(rowValues);
    if (set.size !== rowValues.length) {
        valid = false;
    }

    return valid;
}

const colValid = (board, col) => {
    let valid = true;
    const colValues = [];

    for (let i = 0; i < 9; i++) {
        const el = board[i][col];

        if (el === '.') {
            continue;
        }

        colValues.push(el);
    }

    const set = new Set(colValues);
    if (set.size !== colValues.length) {
        valid = false;
    }

    return valid;
}

const blockValid = (board, blockRow, blockCol) => {
    let valid = true;
    const maxRow = blockRow * 3;
    const maxCol = blockCol * 3;

    const values = [];
    for (let i = maxRow - 1; i > maxRow - 4; i--) {
        for (j = maxCol - 1; j > maxCol - 4; j--) {
            const el = board[i][j];
            if (el === '.') {
                continue;
            }
            values.push(el);
        }
    }

    const set = new Set(values);
    if (set.size !== values.length) {
        valid = false;
    }

    return valid;
}

const blocksValid = (board) => {
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            const res = blockValid(board, i, j);
            if (!res) {
                return false;
            }
        }
    }

    return true;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const rowValidRes = rowValid(board, i);
            const colValidRes = colValid(board, j);

            if (!rowValidRes || !colValidRes) {
                return false;
            }
        }
    }

    const validateBlocks = blocksValid(board);
    return validateBlocks;
};

const board = [
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
];

const res = isValidSudoku(board);
console.log(`Sudoku is${res ? '' : ' not'} valid`);