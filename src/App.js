import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Auth/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
