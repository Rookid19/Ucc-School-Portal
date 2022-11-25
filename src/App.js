import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Auth/SignUp";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
