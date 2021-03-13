import React, { useEffect, useState } from "react";
import Card from "./Card";
import PageLoader from "../CustomLoaders/PageLoader";

const notFoundStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  left: "0",
  top: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle = (contents, classList, newClassList) => {
  contents.forEach(() => {
    classList.forEach(() => {
      classList.reverse().forEach((classs) => {
        newClassList.push(classs);
      });
    });
  });
};

const Articles = ({ articles, name }) => {
  const [title, setTitle] = useState(false);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(false);
  const [message, setMessage] = useState(false);
  const wideClass = "7";
  const smallClass = "5";
  let classList = [smallClass, wideClass];
  let newClassList = [];
  if (articles) contentStyle(articles, classList, newClassList);
  useEffect(() => {
    if (articles?.length >= 1) {
      setLoader(false);
      setData(true);
    } else {
      setLoader(true);
      setData(false);
    }
    if (name?.length >= 1) {
      setTitle(true);
    }

    setTimeout(() => {
      setLoader(false);
      setMessage(true);
    }, 4000);
  }, [articles, name]);

  return (
    <div className="articlesContent">
      <h2 className="acTitle">{title === true ? name : "Tümü"}</h2>
      <div className="articlesList">
        {loader && <PageLoader />}
        {data &&
          articles?.map((article, i) => (
            <Card
              article={article}
              key={`article__${article.id}`}
              w={newClassList[i]}
            />
          ))}
        {message && !data && !loader ? (
          <div style={notFoundStyle}>
            {name ? (
              <p className="notFoundContent">
                {name} kategorisine ait içerik bulunamadı!
              </p>
            ) : (
              <p className="notFoundContent">İçerik bulunamadı</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Articles;
