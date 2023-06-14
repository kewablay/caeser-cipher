import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encrypt from "./pages/Encrypt";
import Decrypt from "./pages/Decrypt";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/decrypt" element={<Decrypt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
