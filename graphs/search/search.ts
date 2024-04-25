import { UGraphNodeStr } from "../graph/graph";
import { StackStr, Stack } from "../common/stack";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: string[] = [],
  visited = new Set([start])
): string[] {
  /*
  1. Loop over the start adjacents
  2. Inside the loop - check if simpson is in visited
  3. If it's in visited - skip it and loop over adjacents
  4. If it's not in visited: add it to visited + check adjacents
   - passing visited down n the recursion
   */

  result.push(start.value);

  start.adjacent.forEach((adj) => {
    if (!visited.has(adj)) {
      visited.add(adj);
      rDfs(adj, result, visited);
    }
  });

  return result;
}


/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  console.log('started');
  // init a stack
  // check start's adjacents
  // create set
  // if the adjacents are not in the set, add them
  // return set's values
  let nodeStack = new Stack([start]);
  let visited: Set<string> = new Set();
  let current;

  while (!nodeStack.isEmpty()) {
    console.log('node srtack before pop', nodeStack)
    current = nodeStack.pop();
    // console.log(current.adjacent);
    for (let adj of current.adjacent) {
      if (!visited.has(adj.value)) {
        nodeStack.push(adj);
      }

    }
    visited.add(current.value);
  }

  let result = [];
  for (let value of visited) {
    result.push(value);
  }
  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  let nodeQueue = new Queue([start]);
  let visited: Set<string> = new Set();
  let current;

  while (!nodeQueue.isEmpty()) {
    console.log('node queue before dequeue', nodeQueue)
    current = nodeQueue.dequeue();
    // console.log(current.adjacent);
    for (let adj of current.adjacent) {
      if (!visited.has(adj.value)) {
        nodeQueue.enqueue(adj);
        // visited = [b, a, c, d]
        // 'b-c-d-a' when visited is added to here this is what we get
        // visited.add(adj.value);
      }

    }
    // visited = [a, b, c, d]
    visited.add(current.value);
  }

  let result = [];
  for (let value of visited) {
    result.push(value);
  }
  return result;
}

export { iDfs, rDfs, bfs };
