function getNeighbors(row, col, matrix) {
  let res = [];
  if (row >= 1) {
    if (matrix[row - 1][col] === 1) {
      res.push([row - 1, col]);
    }
  }
  if (row <= matrix.length - 2) {
    if (matrix[row + 1][col] === 1) {
      res.push([row + 1, col]);
    }
  }
  if (col >= 1) {
    if (matrix[row][col - 1] === 1) {
      res.push([row, col - 1]);
    }
  }
  if (col <= matrix[0].length - 2) {
    if (matrix[row][col + 1] === 1) {
      res.push([row, col + 1]);
    }
  }
  return res;
}


function islandSize(row, col, matrix) {

  // Not an island
  if (matrix[row][col] === 0) {
    return 0;
  }
  // Data Structure for BFS traversal
  let queue = [];
  let visited = new Set();
  let area = 0;
  //
  function convert2DTo1D(row, col) {
    return row * matrix[0].length + col;
  }
  // Initialize the traversal
  queue.push([row, col]);
  visited.add(convert2DTo1D(row, col));
  while (queue.length > 0) {
    let [r, c] = queue.shift();
    area++;
    let neighbors = getNeighbors(r, c, matrix);
    for (let node of neighbors) {
      let converted = convert2DTo1D(...node);
      if (!visited.has(converted)) {
        queue.push(node);
        visited.add(converted);
      }
    }
  }
  return area;
}

module.exports = [getNeighbors, islandSize];