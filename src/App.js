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
import BackButtonAlert from "./components/BackButtonAlert";
import authenticate from "./services/authenticate";
import FormBuilder from "./components/formbuilder/DragForm";
import CandidateTable from "./components/candidates/candidateTable";
import FormList from "./components/formbuilder/FormList";
import { useEffect, useState } from "react";
import ApplicationView from "./components/formbuilder/ApplicationView";

function App() {
  const isAuth = localStorage.getItem("authToken"); // Check authentication status
  const userId = localStorage.getItem("userId");

  const [role, setRole] = useState({});

  useEffect(() => {
    authenticate
      .getUserRole(userId)
      .then((res) => {
        setRole(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <BackButtonAlert />

      <div className="App">
        <Navbar role={role} />
      </div>
      <div>
        {role?.role === "Admin" && (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/formbuilder" element={<FormBuilder />} />
            <Route path="formlist" element={<FormList />} />
            <Route path="/candidates" element={<CandidateTable />} />
            <Route path="form/:id" element={<ApplicationView />} />
            {localStorage.getItem("authToken") && (
              <>
                <Route path="/offers" element={<Offers role={role} />} />
                <Route
                  path="/traineeList"
                  element={<TraineeList role={role} />}
                />

                <Route path="/uploadvideos" element={<UploadVideos />} />
              </>
            )}
          </Routes>
        )}
        {role?.role === "User" && (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contactus" element={<ContactUs />} />
            {localStorage.getItem("authToken") && (
              <>
                <Route path="/offers" element={<Offers role={role} />} />
                {/* <Route
                  path="/traineeList"
                  element={<TraineeList role={role} />}
                /> */}

                <Route path="/uploadvideos" element={<UploadVideos />} />
              </>
            )}
          </Routes>
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
