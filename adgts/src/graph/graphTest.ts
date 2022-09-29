import { addGraphNode, createGraph, IGraph } from "./graph";
import { addGraphEdge, createGraphNode, IGraphNode } from "./graphnode";

export const launch = () => {
  const graph: IGraph = createGraph();
  console.log("1",graph);
  const graphNode1: IGraphNode = createGraphNode("node1");
  const graphNode2: IGraphNode = createGraphNode("node2");
  addGraphNode(graph, graphNode1);
  addGraphNode(graph, graphNode2);
  console.log("2", graph);
  addGraphEdge(graphNode1, graphNode2, 10);
  console.log("3", graph);
  console.log(graph.nodes[0].edges);
};
