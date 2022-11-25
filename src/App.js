import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Auth/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
