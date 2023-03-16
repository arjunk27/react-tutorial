import { Route, Routes } from "react-router-dom";
import "./App.css";

const Home = () => {
  return <p>tt</p>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
