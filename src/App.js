import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/Navbars";
import Footer from "./navbar/Footer";
import TraineeList from "./compoents/TraineeList";
import Offers from "./compoents/common/Offers";
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
          <Route path="/offers" element={<Offers />} />
          {localStorage.getItem("authToken") && (
            <Route path="/traineelist" element={<TraineeList />} />
          )}
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
