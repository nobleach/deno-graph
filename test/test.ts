import {
  assertEquals,
} from "./deps.ts";
import {
  Graph,
} from '../src/Graph.ts';

Deno.test({
  name: "It adds a node to the graph",
  fn(): void {
    const g = new Graph();
    g.addNode(3);
    assertEquals(g.adjList.get(3), []);
  }
});

Deno.test({
  name: "It adds an edge to the graph",
  fn(): void {
    const g = new Graph();
    g.addNode(1);
    g.addNode(3);
    g.addEdge(1,3);
    assertEquals(g.adjList.get(3), [1]);
    assertEquals(g.nodes.length, 2);
  }
});

Deno.test({
  name: "It removes an edge from the graph",
  fn(): void {
    const g = new Graph();
    g.addNode(1);
    g.addNode(3);
    g.addEdge(1,3);
    g.removeEdge(1,3);
    assertEquals(g.nodes.length, 2);
    assertEquals(g.adjList.get(3), []);
  }
});

Deno.test({
  name: "It removes a node from the graph",
  fn(): void {
    const g = new Graph();
    g.addNode(1);
    g.addNode(3);
    g.addEdge(1,3);
    g.removeNode(3);
    assertEquals(g.nodes.length, 1);
    assertEquals(g.adjList.get(1), []);
  }
});

await Deno.runTests;
