import { useState } from "react";
import "./App.css";
import TabooCards from "./components/TabooCards";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px" }}>
      <TabooCards />
    </div>
  );
}

export default App;
