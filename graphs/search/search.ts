import {UGraphNodeStr} from "../graph/graph";
import {StackStr} from "../common/stack";

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

// 1. Set up a Stack
//const toVisit = new StackStr([start.value]);

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}

export {iDfs, rDfs, bfs};
