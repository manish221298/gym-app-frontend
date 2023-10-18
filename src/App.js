import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/Navbars";
import TraineeList from "./compoents/TraineeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {localStorage.getItem("authToken") && (
            <Route path="/traineelist" element={<TraineeList />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
