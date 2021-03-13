import React from "react";
import { useDarkMode } from "../../themes/useDarkMode";

const LoadMore = ({ handleClick }) => {
  const [theme] = useDarkMode();
  const btnClass = theme === "light" ? "btn-outline-dark" : "btn-outline-light";
  return (
    <div className="d-flex justify-content-center w-100 mt-4 mb-4">
      <button
        type="button"
        className={`btn ${btnClass} mb-0`}
        onClick={handleClick}
      >
        Daha Fazla...
      </button>
    </div>
  );
};

export default LoadMore;
