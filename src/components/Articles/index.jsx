import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Articles.css";
import Skeleton from "react-loading-skeleton";
import { Col } from "react-bootstrap";

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

  return (
    <div className="articlesContent">
      <h2 className="acTitle">
        {title ? name || "Tümü" : <Skeleton height={42} />}
      </h2>
      <div className="articlesList">
        {loader ? (
          <>
            <Col xs={12} md={7} className="articleCard">
              <Skeleton height={200} />
            </Col>
            <Col xs={12} md={5} className="articleCard">
              <Skeleton height={200} />
            </Col>
            <Col xs={12} md={5} className="articleCard">
              <Skeleton height={200} />
            </Col>
            <Col xs={12} md={7} className="articleCard">
              <Skeleton height={200} />
            </Col>
          </>
        ) : articles?.length >= 1 ? (
          articles
            ?.sort((a, b) => b.id - a.id)
            .map((article, i) => (
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
