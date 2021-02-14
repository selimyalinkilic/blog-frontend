import React from "react";
import "./ToggleTheme.css";
import mode from "../../assets/img/icon/sitemode.png";

const ToggleTheme = ({ theme }) => {
  return (
    <div className="siteModeContent" onClick={theme}>
      <span className="siteMode" style={{ backgroundImage: `url(${mode})` }} />
    </div>
  );
};

export default ToggleTheme;
