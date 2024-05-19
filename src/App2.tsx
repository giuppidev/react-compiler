import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  const getNumberList = () => {
    console.log("function order declaration");
    return [1, 2, 3, 4];
  };

  return (
    <div>
      <h1>With compiler</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count 👉 <span> {count}</span>
      </button>
      <List getNumberList={getNumberList} />
    </div>
  );
}

export default App;
