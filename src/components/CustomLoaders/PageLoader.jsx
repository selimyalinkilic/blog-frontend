import React from "react";
import Loader from "react-loader-spinner";
import { useDarkMode } from "../../themes/useDarkMode";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const loaderContentStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  left: "0",
  top: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const PageLoader = () => {
  const [theme] = useDarkMode();
  const colorLoader = theme === "light" ? "#000" : "#fff";
  return (
    <div style={loaderContentStyle}>
      <Loader
        type="Watch"
        color={colorLoader}
        height={60}
        width={60}
        timeout={3000}
      />
    </div>
  );
};

export default PageLoader;
