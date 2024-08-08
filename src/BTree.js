import { useState, useEffect, useRef } from "react";
// import { Network } from "vis-network/standalone";
import { BTREE, rawData } from "./csvjson";
import { GraphCanvas, useSelection } from "reagraph";
import Graph from "react-graph-vis";

const TransactionGraph = () => {
  const graphRef = useRef(null);
  const nodeRef = useRef(new Map());

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
    nodes: BTREE.nodes,
    edges: BTREE.edges,
    pathSelectionType: "all",
    // type: 'multi',
  });

  return (
    

     <GraphCanvas
      ref={graphRef}
      selections={selections}
      actives={actives}
      layoutOverrides={{
        nodeSeparation: 1.5,
        mode:'lr',
        nodeSize:[50,50]

      }}
      layoutType="hierarchicalLr"
      // edgeInterpolation="curved"
      nodes={BTREE.nodes || []}
      edges={BTREE.edges || []}
      onCanvasClick={(...props) => {
        console.log("Canvas Click", ...props);
        onCanvasClick(...props);
      }}
      onNodeClick={(...props) => {
        console.log("onNodeClick", props);
        onNodeClick(...props);
      }}
      onNodePointerOver={(...props) => {
        console.log("onNodePointerOver", props);
        onNodePointerOver(...props);
      }}
      onNodePointerOut={(...props) => {
        console.log("onNodePointerOut", props);
        onNodePointerOut(...props);
      }}
      onEdgeClick={(...props) => {
        console.log("onEdgeClick", props);
      }}
      onEdgePointerOver={(...props) => {
        console.log("onEdgePointerOver", props);
      }}
      onEdgePointerOut={(...props) => {
        console.log("onEdgePointerOut", props);
        // setselected()
      }}
    />
  );
};

export default TransactionGraph;
