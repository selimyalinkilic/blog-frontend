import React from "react";
import "./Article.css";
import Moment from "react-moment";
import parse from "html-react-parser";
import Loader from "react-loader-spinner";
import { useDarkMode } from "../../themes/useDarkMode";

const Article = ({ article }) => {
  const [theme] = useDarkMode();
  const color = theme === "light" ? "#000" : "#fff";
  return (
    <div className="articleDetail">
      {article ? (
        <div className="articleContainer">
          <h3 className="articleTitle">{article.title}</h3>
          <div className="articleInfo">
            <span className="articleDate">
              <Moment format="DD/MM/YYYY">{article.createdAt}</Moment>
            </span>
            <span className="articleUser">{article?.author?.username}</span>
          </div>
          <div className="articleContent">
            {article ? parse(article.content) : ""}
          </div>
        </div>
      ) : (
        <div
          className="w-100 d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Loader
            type="ThreeDots"
            color={color}
            height={50}
            width={50}
            timeout={3000}
          />
        </div>
      )}
    </div>
  );
};

export default Article;
