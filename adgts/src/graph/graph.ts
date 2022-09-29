import { createGraphNode, IGraphNode } from "./graphnode";

export interface IGraph {
  nodes: IGraphNode[];
}

export const createGraph = (): IGraph => {
  return {
    nodes: [],
  };
};

export const addGraphNode = (graph: IGraph, node: IGraphNode): void => {
  graph.nodes.push(node);
};

export const createAndAddGraphNode = (
  graph: IGraph,
  name?: string
): IGraphNode => {
  const node: IGraphNode = createGraphNode(name);
  addGraphNode(graph, node);
  return node;
};
