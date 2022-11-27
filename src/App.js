import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Auth/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import Homepage from "./Homepage/Homepage";
import useAuth from "./hooks/useAuth";
import Otp from "./Auth/Otp";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/otp/verification" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
