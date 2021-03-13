import React from "react";
import Loader from "react-loader-spinner";
import { useDarkMode } from "../../themes/useDarkMode";

const loaderContentStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const MenuLoader = () => {
  const [theme] = useDarkMode();
  const colorLoader = theme === "light" ? "#000" : "#fff";
  return (
    <div style={loaderContentStyle}>
      <Loader
        type="ThreeDots"
        color={colorLoader}
        height={20}
        width={20}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default MenuLoader;
