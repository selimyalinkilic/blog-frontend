import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "react-loader-spinner";
import "./Articles.css";
import { useDarkMode } from "../../themes/useDarkMode";

const contentStyle = (contents, classList, newClassList) => {
  contents.forEach(() => {
    classList.forEach(() => {
      classList.reverse().forEach((classs) => {
        newClassList.push(classs);
      });
    });
  });
};

const styleLoader = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: 0,
  top: 0,
};

const Articles = (articles, name) => {
  const [title, setTitle] = useState(false);
  const [loader, setLoader] = useState(true);
  const [theme] = useDarkMode();
  const color = theme === "light" ? "#000" : "#fff";
  const wideClass = "7";
  const smallClass = "5";
  let classList = [smallClass, wideClass];
  let contents = [articles];
  let newClassList = [];
  contentStyle(contents, classList, newClassList);
  useEffect(() => {
    setTimeout(() => {
      setTitle(true);
      setLoader(false);
    }, 1500);
  });
  // if (onLoadMore) contentStyle(contents, classList, newClassList);

  return (
    <div className="articlesContent">
      <h2 className="acTitle">
        {title ? (
          name || "Tümü"
        ) : (
          <Loader
            type="ThreeDots"
            color={color}
            height={20}
            width={20}
            timeout={1500}
          />
        )}
      </h2>
      <div className="articlesList">
        {loader ? (
          <div style={styleLoader}>
            <Loader
              type="ThreeDots"
              color={color}
              height={50}
              width={50}
              timeout={3000}
            />
          </div>
        ) : articles?.length >= 1 ? (
          articles?.map((article, i) => (
            <Card
              article={article}
              key={`article__${article.id}`}
              w={newClassList[i]}
            />
          ))
        ) : name ? (
          <p className="notFoundContent">
            {name} kategorisine ait içerik bulunamadı!
          </p>
        ) : (
          <p className="notFoundContent">İçerik bulunamadı!</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
