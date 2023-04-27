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


  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];