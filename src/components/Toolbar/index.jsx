import React, { useState } from "react";
import ToggleTheme from "../ToggleTheme";
import Links from "./Links";
import MenuBottom from "./MenuBottom";
import MenuTop from "./MenuTop";
import "./Toolbar.css";

const Toolbar = ({ toggleTheme }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleToggleClass = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <header>
      <MenuTop theme={toggleTheme} />
      <button
        className="d-block d-lg-none d-xl-none btnMenuToggle"
        onClick={handleToggleClass}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33334 8H26.6667M5.33334 16H26.6667M5.33334 24H26.6667"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={visibleMenu ? "menuNav show" : "menuNav"}>
        <div className="d-block d-lg-none d-xl-none">
          <ToggleTheme theme={toggleTheme} />
          <button className="closeMenu" onClick={handleToggleClass}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.88 24L35.6 14.28C35.8185 14.0249 35.9326 13.6968 35.9197 13.3612C35.9067 13.0257 35.7676 12.7074 35.5301 12.4699C35.2927 12.2324 34.9743 12.0933 34.6388 12.0804C34.3032 12.0674 33.9751 12.1815 33.72 12.4L24 22.12L14.28 12.3866C14.025 12.1682 13.6969 12.0541 13.3613 12.067C13.0257 12.08 12.7074 12.2191 12.47 12.4566C12.2325 12.694 12.0934 13.0123 12.0804 13.3479C12.0675 13.6835 12.1816 14.0116 12.4 14.2666L22.12 24L12.3867 33.72C12.2471 33.8395 12.1338 33.9866 12.0537 34.152C11.9737 34.3174 11.9287 34.4976 11.9216 34.6812C11.9146 34.8649 11.9455 35.048 12.0125 35.2191C12.0796 35.3902 12.1812 35.5456 12.3112 35.6755C12.4411 35.8055 12.5965 35.9071 12.7676 35.9742C12.9387 36.0412 13.1218 36.0721 13.3055 36.0651C13.4891 36.058 13.6693 36.013 13.8347 35.933C14.0001 35.8529 14.1472 35.7396 14.2667 35.6L24 25.88L33.72 35.6C33.9751 35.8184 34.3032 35.9326 34.6388 35.9196C34.9743 35.9066 35.2927 35.7675 35.5301 35.5301C35.7676 35.2926 35.9067 34.9743 35.9197 34.6387C35.9326 34.3032 35.8185 33.9751 35.6 33.72L25.88 24Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <Links toggleClass={handleToggleClass} />
        <MenuBottom />
      </div>
    </header>
  );
};

export default Toolbar;
