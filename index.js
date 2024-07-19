class Node {
  constructor(value, moves, parent = null) {
    this.value = value;
    this.moves = moves;
    this.parent = parent;
  }
}

// check if position is valid with 2 length array, is integer and between 0 and 7
function isValidPosition(position) {
  return (
    Array.isArray(position) &&
    position.length === 2 &&
    Number.isInteger(position[0]) &&
    Number.isInteger(position[1]) &&
    position[0] >= 0 &&
    position[0] <= 7 &&
    position[1] >= 0 &&
    position[1] <= 7
  );
}

// work out the available spaces for a knight piece.
function space(knight) {
  let move1 = new Node(
    [knight.value[0] - 1, knight.value[1] + 2],
    null,
    knight
  );
  let move2 = new Node(
    [knight.value[0] + 1, knight.value[1] + 2],
    null,
    knight
  );
  let move3 = new Node(
    [knight.value[0] - 2, knight.value[1] + 1],
    null,
    knight
  );
  let move4 = new Node(
    [knight.value[0] - 2, knight.value[1] - 1],
    null,
    knight
  );
  let move5 = new Node(
    [knight.value[0] - 1, knight.value[1] - 2],
    null,
    knight
  );
  let move6 = new Node(
    [knight.value[0] + 1, knight.value[1] - 2],
    null,
    knight
  );
  let move7 = new Node(
    [knight.value[0] + 2, knight.value[1] + 1],
    null,
    knight
  );
  let move8 = new Node(
    [knight.value[0] + 2, knight.value[1] - 1],
    null,
    knight
  );
  const moves = [move1, move2, move3, move4, move5, move6, move7, move8];
  const successfulMoves = [];

  moves.forEach((move) => {
    if (isValidPosition(move.value)) successfulMoves.push(move);
  });
  knight.moves = successfulMoves;
  return knight;
}

function knightsMoves(start, end) {
  // check if input is valid
  if (!isValidPosition(start) || !isValidPosition(end)) {
    return console.log("start and/or end is out of bounds");
  }

  // if it's the same then it returns
  if (start[0] === end[0] && start[1] === end[1]) {
    return console.log("start and end are the same");
  }

  // create the queue and start node and push to queue
  let result = [];
  let queue = [];
  start = new Node(start, null, null);
  queue.push(start);

  //   iterate over tree and use a queue to add the nodes to an array.
  while (queue.length) {
    let current = queue[0]; // get start of the queue
    if (current.value[0] === end[0] && current.value[1] === end[1]) {
      // if they match, clear queue and add traverse the parent to add to path.
      queue = [];
      while (current.parent !== null) {
        result.unshift(current.value);
        current = current.parent;
      }

      // add start value and return the results and amount of moves
      result.unshift(start.value);
      return console.log(
        `It took ${result.length - 1} moves. Here is your path:`,
        result
      );
    }

    // find the moves for the current space and add all the nodes moves to the queue to begin checking
    space(current);
    if (current.moves != null)
      current.moves.forEach((move) => {
        move.parent = current;
        queue.push(move);
      });
    queue.shift(); // remove current from queue
  }
  return;
}

// testing
function runTests() {
  console.log("Running tests for knightsMoves function:");

  // Test 1: Standard move
  console.log("\nTest 1: Standard move from [0,0] to [3,3]");
  knightsMoves([0,0], [3,3]);

  // Test 2: Move to same position
  console.log("\nTest 2: Move to same position [0,0] to [0,0]");
  knightsMoves([0,0], [0,0]);

  // Test 3: Move to opposite corner
  console.log("\nTest 3: Move from [0,0] to [7,7]");
  knightsMoves([0,0], [7,7]);

  // Test 4: Invalid start position
  console.log("\nTest 4: Invalid start position [-1,0] to [3,3]");
  knightsMoves([-1,0], [3,3]);

  // Test 5: Invalid end position
  console.log("\nTest 5: Invalid end position [0,0] to [8,8]");
  knightsMoves([0,0], [8,8]);

  // Test 6: Non-array input
  console.log("\nTest 6: Non-array input");
  knightsMoves("invalid", [3,3]);

  // Test 7: Array with wrong number of elements
  console.log("\nTest 7: Array with wrong number of elements");
  knightsMoves([0], [0,0]);

  // Test 8: Non-integer coordinates
  console.log("\nTest 8: Non-integer coordinates");
  knightsMoves([0.5,0], [3,3]);

  // Test 9: Edge of board move
  console.log("\nTest 9: Edge of board move [0,0] to [1,2]");
  knightsMoves([0,0], [1,2]);

  // Test 10: Null input
  console.log("\nTest 10: Null input");
  knightsMoves(null, [3,3]);
}

runTests();
