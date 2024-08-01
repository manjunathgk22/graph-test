import React, { useEffect, useState, useMemo } from "react";
import { GraphCanvas, useSelection } from "reagraph";
import { useRef } from "react";
import { DATA, rawData } from "./csvjson";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
const ReaGraph = () => {
  const graphRef = useRef(null);
  const [width, setWidth] = useState(200);
  const [selected, setselected] = useState();
  const [graphData, setgraphData] = useState({
    nodes: DATA.nodes,
    edges: DATA.edges,
  });
  const [selectedAccountNumber, setselectedAccountNumber] = useState("");
  const [_selections, _setselections] = useState([]);
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick,
    onNodePointerOver,
    onNodePointerOut,
    selectNodePaths,
    clearSelections,
    setSelections,
    setInternalActives,
  } = useSelection({
    ref: graphRef,
    nodes: graphData.nodes,
    edges: graphData.edges,
    pathSelectionType: "all",
    // type: 'multi',
    hotkeys: ["deselect"],
  });
  const onResize = (event, { size }) => {
    setWidth(size.width < 100 ? 100 : size.width);
  };

  useEffect(() => {
    _setselections(selections);
  }, [selections]);

  useEffect(() => {
    // graphRef.current?.centerGraph(["2086916253"]);
  }, []);

  const filterGraphData = (selectedAccountNumber, data) => {
    data = data || DATA;
    if (!selectedAccountNumber) return { nodes: data.nodes, edges: data.edges };

    const connectedEdges = data.edges.filter(
      (edge) =>
        edge.source === selectedAccountNumber ||
        edge.target === selectedAccountNumber
    );

    const connectedNodeIds = new Set(
      connectedEdges.flatMap((edge) => [edge.source, edge.target])
    );

    const connectedNodes = data.nodes.filter((node) =>
      connectedNodeIds.has(node.id)
    );

    return { nodes: connectedNodes, edges: connectedEdges };
  };

  useEffect(() => {
    const result = filterGraphData(selectedAccountNumber);
    setgraphData(result);
  }, [selectedAccountNumber]);

  const tableData = useMemo(() => {
    if (selected) return filterGraphData(selected.id, graphData)?.edges;
    else return [];
  }, [selected, graphData]);

  console.log("rrrr", selections, actives);

  // useEffect(() => {
  //   if (selected) {
  //     sideBarRef.current.style.width = "400px";
  //   } else {
  //     sideBarRef.current.style.width = "0px";
  //   }
  // }, [selected]);

  const handlePathFind = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const source = formData.get("source");
    const target = formData.get("target");
    if (!source || !target) {
      alert("Please enter both source and target node IDs");
      return;
    }
    try {
      const result = bfsPath(graphData, source, target);
      console.log("ccccc ", [
        result.path,
        result.pathEdges?.map((edge) => edge.id),
      ]);
      if (result.path) {
        // clearSelections([source, target]);
        // setSelections(path)
        // clearSelections(path);
        // setInternalActives([
        //   ...result.path,
        //   ...result.pathEdges?.map((edge) => edge.id),
        // ]);
      }
    } catch (error) {}
  };
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 flex flex-row min-h-[70px] gap-6 items-center bg-slate-100 justify-center transition-all duration-300">
        <div className="flex items-center gap-2">
          <span>Enter Account Number</span>
          <input
            placeholder="Enter account number"
            className="px-4 py-2 rounded-lg"
            value={selectedAccountNumber}
            onChange={(e) => setselectedAccountNumber(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          
        </div>
        {/* <button onClick={()=> selectNodePaths(graphData.nodes[0].id, graphData.nodes[1].id)}>click</button> */}
      </div>
      <div className="flex">
        <div className="flex flex-1 relative transition-all duration-300">
          {!graphData.nodes?.length ? (
            <div className="flex flex-1 flex-col justify-center items-center">
              <h3>No Accounts found for {selectedAccountNumber}</h3>
            </div>
          ) : (
            <GraphCanvas
            layoutType="hierarchicalLr"
            key={selectedAccountNumber}
              selections={_selections}
              actives={actives}
              ref={graphRef}
              nodes={graphData.nodes}
              edges={graphData.edges}
              labelType="nodes"
              draggable
              edgeInterpolation="linear"
              onCanvasClick={(...props) => {
                console.log("Canvas Click", ...props);
                onCanvasClick(...props);
                setselected(null);
              }}
              onNodeClick={(...props) => {
                console.log("onNodeClick", props);
                setselected(props[0]);
                onNodeClick(...props);
              }}
              onNodePointerOver={(...props) => {
                console.log("onNodePointerOver", props);
                onNodePointerOver(...props);
              }}
              onNodePointerOut={(...props) => {
                console.log("onNodePointerOut", props);
                // setselected()
                onNodePointerOut(...props);
              }}
              onEdgeClick={(...props) => {
                console.log("onEdgeClick", props);
                setselected(props[0]);
              }}
              onEdgePointerOver={(...props) => {
                console.log("onEdgePointerOver", props);
              }}
              onEdgePointerOut={(...props) => {
                console.log("onEdgePointerOut", props);
                // setselected()
              }}
            />
          )}
        </div>
        <Resizable
          width={width}
          height={window.innerHeight - 70}
          onResize={onResize}
          resizeHandles={["w"]}
        >
          <div
            className="relative"
            style={{
              width,
              minHeight: window.innerHeight - 70,
              height: window.innerHeight - 70,
            }}
          >
            <div
              className=" p-4 bg-slate-100 transition-all duration-300 overflow-auto "
              style={{
                width,
                minHeight: window.innerHeight - 70,
                height: window.innerHeight - 70,
              }}
            >
              {selected ? (
                <ul className=" text-left">
                  <li className="bold text-lg whitespace-nowrap">
                    {selected.label}
                  </li>
                  {Object.entries(selected.data).map(([key, value]) => (
                    <li key={key}>
                      <span className="whitespace-nowrap font-light">
                        {key}:
                      </span>{" "}
                      {value?.toString()}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div key={tableData}>
                {selected && tableData?.length ? (
                  <div className="pl-4">
                    <div class="flex flex-col" key={selectedAccountNumber}>
                      <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                          <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                              <thead>
                                <tr>
                                  {Object.keys(tableData[0]?.data).map(
                                    (key) => (
                                      <th
                                        key={key}
                                        scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                      >
                                        {key}
                                      </th>
                                    )
                                  )}
                                </tr>
                              </thead>
                              <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                {tableData.map((edge, i) => (
                                  <tr key={edge.id}>
                                    {Object.values(edge.data).map((value) => (
                                      <td
                                        key={value}
                                        class="px-6 py-4 text-start text-sm font-medium text-gray-500 dark:text-neutral-500"
                                      >
                                        {value?.toString()}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  );
};

export default ReaGraph;

function buildAdjacencyList(graph) {
  const adjacencyList = {};

  graph.nodes.forEach((node) => {
    adjacencyList[node.id] = [];
  });

  graph.edges.forEach((edge) => {
    adjacencyList[edge.source].push(edge.target);
    adjacencyList[edge.target].push(edge.source); // If the graph is undirected
  });

  return adjacencyList;
}

// BFS function to find the shortest path
function bfsPath(graph, startNode, endNode) {
  const adjacencyList = buildAdjacencyList(graph);
  const queue = [[startNode]];
  const visited = new Set();
  const edgeMap = {};

  // Create a map to easily find the edge between two nodes
  graph.edges.forEach((edge) => {
    edgeMap[`${edge.source}-${edge.target}`] = edge;
    edgeMap[`${edge.target}-${edge.source}`] = edge; // If the graph is undirected
  });

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === endNode) {
      // Construct the path edges
      const pathEdges = [];
      for (let i = 0; i < path.length - 1; i++) {
        const edge = edgeMap[`${path[i]}-${path[i + 1]}`];
        if (edge) pathEdges.push(edge);
      }
      return { path, pathEdges };
    }

    if (!visited.has(node)) {
      visited.add(node);
      const neighbors = adjacencyList[node];

      for (const neighbor of neighbors) {
        const newPath = [...path, neighbor];
        queue.push(newPath);
      }
    }
  }

  return null; // Return null if no path is found
}
