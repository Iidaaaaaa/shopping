import { useState } from "react";

const MapToggleCode = () => {
  const [position, setPosition] = useState("top-1/3");

  const togglePosition = () => {
    setPosition((prevPosition) =>
      prevPosition === "top-1/3" ? "top-2/3" : "top-1/3"
    );
  };

  const setTopPosition = () => {
    setPosition("top-1/3");
  };

  return [position, togglePosition, setTopPosition];
};

export default MapToggleCode;
