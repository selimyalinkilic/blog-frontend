import React from "react";
import "./Article.css";
import Moment from "react-moment";
import parse from "html-react-parser";
import PageLoader from "../CustomLoaders/PageLoader";

const Article = ({ article }) => {
  return (
    <div className="articleDetail">
      {article ? (
        <div className="articleContainer">
          <h3 className="articleTitle">{article.title}</h3>
          <div className="articleInfo">
            <span className="articleDate">
              <Moment format="DD/MM/YYYY">{article.createdAt}</Moment>
            </span>
            <span className="articleUser">{article.author?.username}</span>
          </div>
          <div className="articleContent">{parse(article.content)}</div>
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default Article;
