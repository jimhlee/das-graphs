import {UGraphNodeStr} from "../common/graph";
import {bfs} from "../search/search";
import {Queue} from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  /*
  Math.min()

  DFS
 - Stack to keep track of nodes to visit
  - Set to keep track of seen

  Every time it recurse, we return a number

  */

  // const newGraph = new UGraphNodeStr("new");
  // newGraph.adjacent

  //start.adjacent

  let toVisit = new Queue([start]);
  let visited: Set<string> = new Set();

  let counter = 0;
  let min = Infinity;

  while (!toVisit.isEmpty()) {
    let current = toVisit.dequeue();

    if (current === sought) {
      return counter;
    }

    for (let adj of current.adjacent) {
      if (!visited.has(adj.value)) {
        toVisit.enqueue(adj);
      }
    }
  }

  return Infinity;
}

export {fewestEdges};

//            R
//         /  |  \
//        I - T - H
//                |
//                M   X
