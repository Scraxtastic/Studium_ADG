
export interface IDijkstraGraph{
    nodes: IDijkstraGraphNode[];
}

export interface IDijkstraGraphNode{
    id: number;
    name: string;
    edges: IDijkstraGraphEdge[];
}

export interface IDijkstraGraphEdge{
    from: IDijkstraGraphNode;
    to: IDijkstraGraphNode;
    weight?: number;
    checked: boolean;
}
