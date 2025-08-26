import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Exam from "./pages/Exam";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;