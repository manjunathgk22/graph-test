import React, { useEffect, useState, useMemo } from "react";
import { GraphCanvas, useSelection } from "reagraph";
import { useRef } from "react";
import { DATA, rawData } from "./csvjson";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import Transactions from "./Transactions";
import {omit} from 'lodash'
import { generateColors } from "./utils";
const graph = {
  nodes: DATA.nodes,
  edges: DATA.edges,
}
const ReaGraph = () => {
  const graphRef = useRef(null);
  const [width, setWidth] = useState(200);
  const [selected, setselected] = useState();
  const [graphData, setgraphData] = useState(graph);
  const [color, setcolor] = useState("default")
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

  useEffect(() => {
    const result = filterTransactions(selectedAccountNumber);
    setgraphData(result);
  }, [selectedAccountNumber]);

  const tableData = useMemo(() => {
    if(!selected) return [];
    if(selected?.data?.totalAmount){
      return graphData?.edges?.filter(edge => edge.id === selected.id)
    }
    else {
      return filterGraphData(selected.id, graphData)?.edges;
    }
   
  }, [selected, graphData]);
  
  const bvnMap = useMemo(()=>{
    const _bvnMap = new Map()
    graphData.nodes.forEach((node) => {
      if(!_bvnMap.has(node.data.bvn)) _bvnMap.set(node.data.bvn, '')
    })
    const _colors = generateColors(_bvnMap.size);
    Array.from(_bvnMap).map(([key, value], i) => {
      _bvnMap.set(key, _colors[i])
    })
   
    return _bvnMap
  }, [graphData])
  console.log('xxx', bvnMap)

 useEffect(()=>{
  if(color === 'default'){
    setgraphData(graphData => ({
      ...graphData,
      nodes: graphData.nodes.map(node => ({
        ...node,
        fill: '#7CA0AB'
      }))
    }))
  }else if(color === 'BVN'){
    setgraphData(graphData => ({
      ...graphData,
      nodes: graphData.nodes.map(node => ({
        ...node,
        fill: bvnMap.get(node.data.bvn)
      }))
    }))
    
  }
 }, [color])
  return (
    <div className="flex-1 flex flex-col h-full overflow-auto p-4">
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
        <div className="flex gap-2"></div>
        {/* <button onClick={()=> selectNodePaths(graphData.nodes[0].id, graphData.nodes[1].id)}>click</button> */}
      </div>
      
        <Transactions tableData={graphData.edges} />
    
      <h3 className="flex text-left font-bold bg-white p-2 mt-6">
      Account Visualization
      </h3>
      <div className="py-4">
        <div className="flex flex-row gap-2 items-center">
          <h5>Fill Color By</h5>
          <select onChange={(e)=>setcolor(e.target.value)} value={color} className="p-3 bg-slate-300 rounded-md justify-center items-center flex w-[150px]">
            <option value="default">default</option>
            <option value="BVN">BVN</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 bg-white flex-1">
        <div className="flex flex-1 relative transition-all duration-300 bg-slate-100">
          {!graphData.nodes?.length ? (
            <div className="flex flex-1 flex-col justify-center items-center">
              <h3>No Accounts found for {selectedAccountNumber}</h3>
            </div>
          ) : (
            <GraphCanvas
              theme={theme}
              layoutType="hierarchicalLr"
              key={selectedAccountNumber}
              selections={_selections}
              actives={actives}
              ref={graphRef}
              nodes={graphData.nodes}
              edges={graphData.edges}
              labelType="all"
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
              minHeight: window.innerHeight - 100,
              height: window.innerHeight - 100,
            }}
          >
            <div
              className=" p-4 bg-slate-100 transition-all duration-300 overflow-auto "
              style={{
                width,
                height: "100%",
              }}
            >
              {selected ? (
                <ul className=" text-left">
                  <li className="bold text-lg whitespace-nowrap">
                    {selected?.data?.totalAmount? selected.label + ' Transactions':  selected.label}
                  </li>
                  {Object.entries(omit(selected.data, ['amount', "Transaction Date", 'transactionRef'])).map(([key, value], i) => (
                    <li key={key + i}>
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
                                    (key, i) => (
                                      <th
                                        key={key + i}
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
                                  <tr key={''+edge.id + `${i}`}>
                                    {Object.values(edge.data).map((value, i) => (
                                      <td
                                        key={'' +value + `${i}`}
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

const filterTransactions = (parentId, data) => {
  data = data || DATA;
  if (!parentId) return { nodes: data.nodes, edges: data.edges };

  const resultNodes = new Set([parentId]);
  const resultEdges = new Set();
  const rootNode = data.nodes.find((node) => node.id === parentId);
  if (!rootNode) {
    throw new Error(`Root node with id ${parentId} not found`);
  }

  const recursiveSearch = (nodeId) => {
    data.edges.forEach((edge) => {
      if (edge.source === nodeId) {
        resultEdges.add(edge);
        const targetNodeId = edge.target;
        if (!resultNodes.has(targetNodeId)) {
          resultNodes.add(targetNodeId);
          recursiveSearch(targetNodeId);
        }
      }
    });
  };

  recursiveSearch(parentId);

  return {
    nodes: Array.from(resultNodes).map((nodeId) =>
      data.nodes.find((node) => node.id === nodeId)
    ),
    edges: Array.from(resultEdges),
  };
};

const theme = {
  canvas: { background: '#f1f5f9' },
  node: {
    fill: '#7CA0AB',
    activeFill: '#1DE9AC',
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.2,
    label: {
      color: '#2A6475',
      stroke: '#fff',
      activeColor: '#1DE9AC'
    },
    subLabel: {
      color: '#ddd',
      stroke: 'transparent',
      activeColor: '#1DE9AC'
    }
  },
  lasso: {
    border: '1px solid #55aaff',
    background: 'rgba(75, 160, 255, 0.1)'
  },
  ring: {
    fill: '#D8E6EA',
    activeFill: '#1DE9AC'
  },
  edge: {
    fill: '#D8E6EA',
    activeFill: '#1DE9AC',
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.1,
    label: {
      stroke: '#fff',
      color: '#2A6475',
      activeColor: '#1DE9AC',
      fontSize: 6
    }
  },
  arrow: {
    fill: '#D8E6EA',
    activeFill: '#1DE9AC'
  },
  cluster: {
    stroke: '#D8E6EA',
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.1,
    label: {
      stroke: '#fff',
      color: '#2A6475'
    }
  }
}