import React from "react";
import "./MenuBottom.css";

const MenuBottom = () => {
  return (
    <div className="d-flex flex-column align-items-center menuBottomContents">
      <a href="/" className="btn btn-outline-dark">
        Anasayfaya Dön
      </a>
      <span className="copyright">© 2020 Yagizdo</span>
    </div>
  );
};

export default MenuBottom;
