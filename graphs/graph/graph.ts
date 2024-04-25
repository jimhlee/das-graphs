/** Graph Node class. */

class UGraphNodeStr {
  value: string;
  adjacent: Set<UGraphNodeStr>;

  constructor(value: string, adjacent = new Set<UGraphNodeStr>()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class UGraphStr {
  nodes: Set<UGraphNodeStr>;

  constructor() {
    this.nodes = new Set();
  }

  /** Add node to graph. */
  addNode(node: UGraphNodeStr): void {
    this.nodes.add(node);
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: UGraphNodeStr[]): void {
    for (let node of nodeArray) {
      this.nodes.add(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    // add other node to node's adjacent property
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // graph.addEdges([[a, b], [a, c], [b, c]]);
  addEdges(nodeArray: [UGraphNodeStr, UGraphNodeStr][]): void {
    // [[a, b], [a, c], [b, c]]
    // a.adjacent = [b,c]
    for (let nodeTuple of nodeArray) {
      this.addEdge(nodeTuple[0], nodeTuple[1]);
    }
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
    // repeat

  }

  /** Remove node from graph. */
  removeNode(node: UGraphNodeStr): void {
    // LOOP METHOD
    // for (let a of node.adjacent) {
    //   // remove the node from all adjacents
    //   a.adjacent.delete(node);
    // }

    // forEach METHOD
    // this and the loop method both do the same thing
    node.adjacent.forEach(a => {
      // remove the node from all adjacents
      a.adjacent.delete(node);
    });

    // remove all adjacents from this node
    node.adjacent.clear();

    // remove this node from the nodes set of the graph
    this.nodes.delete(node);
  }
}

export { UGraphNodeStr, UGraphStr };