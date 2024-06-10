import React, { useState, useEffect } from "react";

// // constants
import { EMPTY_ARRAY } from "../constants/chatApp.constants";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, EMPTY_ARRAY);

  return windowDimensions;
};

export default useWindowDimensions;
