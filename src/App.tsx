import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>With compiler</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count 👉 <span> {count}</span>
      </button>
      <Card />
    </div>
  );
}

export default App;
