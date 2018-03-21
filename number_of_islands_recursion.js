var numIslands = function(grid) {
    var visited = [];
    var row = grid.length;

    if(!grid || row === 0) {
        return 0;
    }

    var col = grid[0].length;
    var count = 0;
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
          // number is string
            if(grid[i][j] === '1') {
                count++;
                traverse(i, j, grid, row, col);
            }
        }
    }

    return count;
};

var traverse = function(i, j, grid, row, col) {
    if((0 <= i &&  i < row) && (0 <= j && j < col) && grid[i][j] === '1') {
        grid[i][j] = '2';


        traverse(i + 1, j, grid, row, col);
        traverse(i, j + 1, grid, row, col);
        traverse(i - 1, j, grid, row, col);
        traverse(i, j - 1, grid, row, col);
    }
