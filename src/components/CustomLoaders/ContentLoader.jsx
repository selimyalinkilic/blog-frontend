import React from "react";
import Loader from "react-loader-spinner";
import { useDarkMode } from "../../themes/useDarkMode";

const ContentLoader = () => {
  const [theme] = useDarkMode();
  const colorLoader = theme === "light" ? "#000" : "#fff";
  return (
    <div className="content-loader">
      <Loader type="Watch" color={colorLoader} height={60} width={60} />
    </div>
  );
};

export default ContentLoader;
