var minPathSum = function(grid) {
    let dp = new Array(grid.length + 1).fill(new Array(grid[0].length + 1).fill(Infinity));
    
    dp[1][1] = grid[0][0];
    
    for (let y = 1; y < dp.length; y++){
        for (let x = 1; x < dp[0].length; x++) {
            if (y === 1 && x === 1) continue;
            let num = grid[y - 1][x - 1];
            dp[y][x] = Math.min(dp[y-1][x] + num, dp[y][x-1] + num);
        }
    }
    
    return dp[dp.length - 1][dp[0].length - 1];
};