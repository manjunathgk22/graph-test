import "./App.css";
import { GraphCanvas, useSelection } from "reagraph";
// import { graphData } from "./dummyData";
import { useRef } from "react";
import graphData from './graphData.json';

function App() {
  const graphRef = useRef(null);
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick,
    onNodePointerOver,
    onNodePointerOut,
  } = useSelection({
    ref: graphRef,
    nodes: graphData.nodes,
    edges: graphData.edges,
    pathSelectionType: "out",
  });
  return (
    <div className="App">
      {/* <GraphCanvas
        draggable
        nodes={graphData.nodes}
        edges={graphData.edges}
        ref={graphRef}
        selections={selections}
        onCanvasClick={onCanvasClick}
        onNodeClick={onNodeClick}
        edgeLabelP
        osition="above" labelType="edges" 
      /> */}
      <GraphCanvas
        selections={selections}
        actives={actives}
        ref={graphRef}
        nodes={graphData.nodes}
        edges={graphData.edges}
        // labelType="nodes"
        draggable
        edgeInterpolation="curved"
        onCanvasClick={onCanvasClick}
        onNodeClick={onNodeClick}
        onNodePointerOver={onNodePointerOver}
        onNodePointerOut={onNodePointerOut}
      />
    </div>
  );
}

export default App;
