import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BackButtonAlert = () => {
  const [prevLocation, setPrevLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      console.log("first1", event);
      //   event.preventDefault();
      //   event.returnValue = ""; // Required for some browsers
    };

    const handleNavigation = (event) => {
      console.log("first2", event);
      event.preventDefault();
      if (window.confirm("Do you want to go back?")) {
        // Allow navigation
        window.removeEventListener("beforeunload", handleBeforeUnload);
        return;
      } else {
        // Block navigation
        event.preventDefault();
        navigate(prevLocation);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [prevLocation, navigate]);

  useEffect(() => {
    return () => {
      setPrevLocation(null); // Reset prevLocation when component unmounts
    };
  }, []);

  return null;
};

export default BackButtonAlert;
