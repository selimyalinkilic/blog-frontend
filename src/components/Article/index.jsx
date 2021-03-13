import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import parse from "html-react-parser";
import PageLoader from "../CustomLoaders/PageLoader";
import SocialShare from "../SocialShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const WORDS_PER_MINUTE = 200;
const ReadTime = ({ totalWords }) => {
  const time = Math.ceil(totalWords / WORDS_PER_MINUTE);
  return (
    <span className="articleReadTime">
      <FontAwesomeIcon icon={faClock} /> {time}
    </span>
  );
};

const Article = ({ article }) => {
  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    if (article) {
      const allText = article.content;
      const words = allText.split(" ");
      setTotalWords(words.length);
    }
  }, [article]);

  return (
    <div className="articleDetail" id="articleContent">
      {article ? (
        <div className="articleContainer">
          <h3 className="articleTitle">{article.title}</h3>
          <div className="articleInfo">
            <span className="articleDate">
              <Moment format="DD/MM/YYYY">{article.createdAt}</Moment>
            </span>
            <span className="articleUser">{article.author?.username}</span>
          </div>
          <ReadTime totalWords={totalWords} />
          <div className="articleContent">{parse(article.content)}</div>
          <SocialShare article={article} />
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default Article;
