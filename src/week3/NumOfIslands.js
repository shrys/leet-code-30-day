/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    const markIsland = function (grid, x, y, visited) {
        if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
            return;
        }
        if (visited[x][y] === true) {
            return;
        }
        visited[x][y] = true;
        if (grid[x][y] === '0') {
            return;
        }
        markIsland(grid, x - 1, y, visited);
        markIsland(grid, x + 1, y, visited);
        markIsland(grid, x, y - 1, visited);
        markIsland(grid, x, y + 1, visited);
    };

    const visited = [];
    for (let i = 0; i < grid.length; i++) {
        visited[i] = [];
    }
    let count = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (!visited[x][y] && grid[x][y] === '1') {
                count++;
                markIsland(grid, x, y, visited);
            }
            visited[x][y] = true;
        }
    }
    return count;
};

console.log(numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]));

console.log(numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
]));
