import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbars";
import Footer from "./navbar/Footer";
import TraineeList from "./components/TraineeList";
import Offers from "./components/common/Offers";
import UploadVideos from "./components/UploadVideos";
import Home from "./Home";
import ContactUs from "./components/common/ContactUs";

function App() {
  const isAuth = localStorage.getItem("authToken"); // Check authentication status

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contactus" element={<ContactUs />} />
          {localStorage.getItem("authToken") && (
            <>
              <Route path="/traineeList" element={<TraineeList />} />
              {/* Corrected the route path */}
              <Route path="/uploadvideos" element={<UploadVideos />} />
            </>
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
