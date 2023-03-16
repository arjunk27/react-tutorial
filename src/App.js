import { Route, Routes } from "react-router-dom";
import "./App.css";
import UseContextExample from "./Intermediate/MoreHooks/useContext";
import UseRefExample from "./Intermediate/MoreHooks/useRef";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Beginner */}

        {/* Intermediate */}
        <Route path="/" element={<UseContextExample />} />
        <Route path="/inter/useref" element={<UseRefExample />} />
      </Routes>
    </div>
  );
}

export default App;
