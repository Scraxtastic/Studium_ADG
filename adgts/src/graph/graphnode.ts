import { createGraphEdge, IGraphEdge } from "./graphedge";

export interface IGraphNode {
  id: number;
  name: string;
  edges: IGraphEdge[];
}
let id = 0;
export const createGraphNode = (name?: string): IGraphNode => {
  let currentID = id;
  id++;
  return {
    id: currentID,
    name,
    edges: [],
  };
};

export const addGraphEdge = (
    nodeFrom: IGraphNode,
    nodeTo: IGraphNode,
    weight?: number
  ): IGraphEdge => {
    const edge: IGraphEdge = createGraphEdge(nodeFrom, nodeTo, weight);
    nodeFrom.edges.push(edge);
    nodeTo.edges.push(edge);
    return edge;
  };
