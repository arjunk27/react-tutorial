import { Route, Routes } from "react-router-dom";
import "./App.css";
import UseContextExample from "./Intermediate/MoreHooks/useContext";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UseContextExample />} />
      </Routes>
    </div>
  );
}

export default App;
