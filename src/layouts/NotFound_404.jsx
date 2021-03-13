import React from "react";
import { ThemeProvider } from "styled-components";
import notfound from "../assets/img/notfound-blog-2x.png";
import { GlobalStyles } from "../themes/global";
import { darkTheme, lightTheme } from "../themes/theme";
import { useDarkMode } from "../themes/useDarkMode";

const NotFound_404 = () => {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const themeClass = theme === "light" ? "lightContent" : "darkContent";
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className={themeClass + " App"}>
        <div className="notfound">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 notfound__col">
                <h3 className="notfound__text">
                  <b>We can't find the page</b>
                </h3>
                <h3 className="notfound__text">you are looking for.</h3>
                <a href="/" className="btn notfound__btn">
                  BACK TO HOME
                </a>
              </div>
              <div className="col-12 col-md-6 notfound__col">
                <figure className="notfound__figure">
                  <img
                    src={notfound}
                    alt="Yagoo NotFound"
                    className="img-fluid notfound__img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound_404;
