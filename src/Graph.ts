export class Graph {
  public adjList: Map<number, Array<number>>;
  public nodes: Array<number>;

  constructor() {
    this.adjList = new Map();
    this.nodes = [];
  }

  public addNode(node: number) {
    this.nodes.push(node);
    this.adjList.set(node, []);
  }

  public addEdge(n1: number, n2: number) {
    this.adjList.get(n1)?.push(n2);
    this.adjList.get(n2)?.push(n1);
  }

  public removeNode(node: number) {

  }

  // public removeEdge(node1: number, node2: number) {

  // }

  // public depthFirstTraversal(startingNode: number, callback = console.log) {
  //   const nodeStack = [];
  //   const visited = {};

  //   nodeStack.push(startingNode);
  //   visited[startingNode] = true;

  //   while (nodeStack.length) {
  //     const current = nodeStack.pop();
  //     const neighbors = this.adjList[current];
  //     callback(current);

  //     neighbors.forEach((neighbor: number) => {
  //       if (!visited[neighbor]) {
  //         nodeStack.push(neighbor);
  //         visited[neighbor] = true;
  //       }
  //     });
  //   }
  // }
}
