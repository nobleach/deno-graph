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

  public removeNode(item: number) {
    this.nodes = this.nodes.filter(node => {
      return node !== item;
    });

    while (this.adjList.get(item)?.length) {
      let adjacentNode = this.adjList.get(item)?.pop();
      if (adjacentNode) {
        this.removeEdge(item, adjacentNode);
      }
    }
  }

  public removeEdge(n1: number, n2: number) {
    const n2Index = this.adjList.get(n1)?.indexOf(n2) ?? -1;
    const n1Index = this.adjList.get(n2)?.indexOf(n1) ?? -1;
    this.adjList.get(n1)?.splice(n2Index, 1);
    this.adjList.get(n2)?.splice(n1Index, 1);

  }

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
