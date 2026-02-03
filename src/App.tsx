import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App
