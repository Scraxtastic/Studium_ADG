import { IGraphEdge } from "./graphedge";

export interface IGraphNode {
  edges: IGraphEdge[];
}
export const createGraphNode = (): IGraphNode => {
  return {
    edges: [],
  };
};
