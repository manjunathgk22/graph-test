import React, { useEffect, useState } from "react";
import { GraphCanvas, useSelection } from "reagraph";
// import { graphData } from "./dummyData";
import { useRef } from "react";
import graphData from "./graphData.json";
const ReaGraph = () => {
  const graphRef = useRef(null);
  const [selected, setselected] = useState()
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick,
    onNodePointerOver,
    onNodePointerOut,
    selectNodePaths
    
  } = useSelection({
    ref: graphRef,
    nodes: graphData.nodes,
    edges: graphData.edges,
    pathSelectionType: "out",
  });

 

  return (
    <div className="flex-1 flex h-full">
      <div className="flex flex-1 relative">
      <GraphCanvas
      selections={selections}
      actives={actives}
      ref={graphRef}
      nodes={graphData.nodes}
      edges={graphData.edges}
      // labelType="nodes"
      draggable
      edgeInterpolation="curved"
      onCanvasClick={(...props) => {
        console.log("Canvas Click", ...props);
        onCanvasClick(...props);
      }}
      onNodeClick={(...props)=>{
        console.log('onNodeClick', props)
        setselected(props[0])
        onNodeClick(...props)
      }}
      onNodePointerOver={(...props)=>{
        console.log('onNodePointerOver', props)
        // setselected(props[0])
        onNodePointerOver(...props)
      }}
      onNodePointerOut={(...props)=>{
        console.log('onNodePointerOut', props)
        // setselected()
        onNodePointerOut(...props)
      }}
      onEdgeClick={(...props)=>{
        console.log('onEdgeClick', props)
        setselected(props[0])
      }}
      onEdgePointerOver={(...props)=>{
        console.log('onEdgePointerOver', props)
        // setselected(props[0])
      }}
      onEdgePointerOut={(...props)=>{
        console.log('onEdgePointerOut', props)
        // setselected()
      }}
    />
      </div>
    <div className="w-[300px] p-4 bg-slate-100 min-h-screen">
      {
        selected ? <ul className=" text-left">
          <li className="bold text-lg">{selected.label}</li>
          {
            Object.entries(selected.data).map(([key, value]) => <li key={key}><span className=" font-light">{key}:</span> {value?.toString()}</li>)
          }
        </ul>: null
      }
    </div>
    </div>
  );
};

export default ReaGraph;
