import React from "react";
import "./Article.css";
import Moment from "react-moment";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";

const Article = ({ article }) => {
  return (
    <div className="articleDetail">
      <div className="articleContainer">
        <h3 className="articleTitle">
          {article?.title || <Skeleton height={42} />}
        </h3>
        <div className="articleInfo">
          <span className="articleDate">
            <Moment format="DD/MM/YYYY">
              {article?.createdAt || <Skeleton height={17} />}
            </Moment>
          </span>
          <span className="articleUser">
            {article?.author?.username || <Skeleton height={16} />}
          </span>
        </div>
        <div className="articleContent">
          {article ? parse(article.content) : <Skeleton height={500} />}
        </div>
      </div>
    </div>
  );
};

export default Article;
