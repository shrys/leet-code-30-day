const BinaryMatrix = function (mat) {
    this.get = function (x, y) {
        return mat[x][y];
    };

    this.dimensions = function () {
        return [mat[0].length, mat.length];
    }
}

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = binaryMatrix => {
    const [n, m] = binaryMatrix.dimensions();
    const p = { x: 0, y: m - 1, index: -1 };

    while (p.x < n && p.y >= 0) {
        if (binaryMatrix.get(p.x, p.y) === 1) {
            p.index = p.y;
            p.y--;
        } else {
            p.x++;
        }
    }

    return p.index;
};

console.log(leftMostColumnWithOne(new BinaryMatrix([[0, 0], [1, 1]])));
console.log(leftMostColumnWithOne(new BinaryMatrix([[0, 0], [0, 1]])));