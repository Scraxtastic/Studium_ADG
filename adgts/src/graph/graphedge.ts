import { IGraphNode } from "./graphnode";

export interface IGraphEdge {
  from: IGraphNode;
  to: IGraphNode;
  weight: number;
}

export const createGraphEdge = (
  from: IGraphNode,
  to: IGraphNode,
  weight: number
): IGraphEdge => {
  return {
    from: from,
    to: to,
    weight: weight,
  };
};
