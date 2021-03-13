import React from "react";
import ToggleTheme from "../../ToggleTheme";
import logo from "../../../assets/img/yagizdophoto-logo.png";

const MenuTop = ({ theme }) => {
  return (
    <div className="menuTop">
      <img src={logo} width="64" height="64" alt="yagooblogphoto"></img>
      <div className="d-none d-lg-block d-xl-block">
        <ToggleTheme theme={theme} />
      </div>
      <div className="menuTopText">
        <p className="userName">Yılmaz Yağız Dokumacı</p>
        <span className="userTitle">Mobile Developer</span>
      </div>
    </div>
  );
};

export default MenuTop;
