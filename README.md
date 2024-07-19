# Knights Travails - The Odin Project

## Project Overview

This project implements a `knightMoves` function that finds the shortest path for a knight to move from one square to another on a chessboard. It demonstrates the application of graph algorithms, data structures, and breadth-first traversal to efficiently solve the problem.

## Core Functionalities

- **Node Representation**: Each chessboard square is represented as a node containing its position, possible moves, and parent node.
- **Move Generation**: A `space` function generates all valid moves for a knight from a given position, discarding any moves that would be out of bounds on an 8x8 chessboard.
- **Path-finding**: The solution uses Breadth-First Traversal (BFT) to find the shortest path. It employs a queue (implemented with an array using `push()` and `shift()`) to explore moves level by level until the target position is reached.

## Challenges and Solutions

- Implementing an efficient queue system for graph traversal.
- Handling invalid input and edge cases.
- Tracking and calculating the number of moves in the shortest path.

## Skills Developed

- Implementing a queue using an array with `push()` and `shift()` operations.
- Creating a separate function to validate board boundaries and user input.
- Using parent node references to backtrack and construct the shortest path.
- Applying breadth-first search to solve a practical problem.

## Reflections

This project significantly enhanced my understanding of breadth-first and depth-first search algorithms. It highlighted the importance of choosing the right algorithm for efficiency. Representing the chessboard as a graph with nodes greatly simplified the process of traversing from one position to another.

The time spent on pseudo-code and diagrams proved invaluable in mapping out the approach and selecting the most efficient algorithm. These computer science projects have solidified my grasp of algorithms and data structures, emphasizing their crucial role in writing efficient code.

## How to Use

1. Clone the repository:
   ```
   git clone https://github.com/SReddy-96/TOP-knights-travail.git
   ```

2. Navigate to the project directory:
   ```
   cd TOP-knights-travail
   ```

3. If there are any dependencies, install them:
   ```
   npm install
   ```

4. Run the script:
   ```
   node index.js
   ```

Feel free to explore the code and test the `knightMoves` function with various start and end positions!

### Resources

- [Graph Traversals - BFS & DFS - Breadth First Search and Depth First Search](https://www.youtube.com/watch?v=pcKY4hjDrxk)
