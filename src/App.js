import "./App.css";
import TransactionGraph from "./BTree";
import ReaGraph from "./ReaGraph";

function App() {
 
  return (
    <div className="App w-full h-full" style={{minHeight: '100vh'}}>

      {/* <ReaGraph
      /> */}
      <TransactionGraph />
    </div>
  );
}

export default App;
