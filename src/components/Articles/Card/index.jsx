import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import "./Card.css";

const Card = ({ article, w }) => {
  return (
    <Col xs={12} md={w} className="articleCard">
      <div className="articleCardContainer">
        <figure className="articleCardFigure">
          <img src={article.thumbnail} alt={article.title} loading="lazy" />
        </figure>
        <div className="articleCardOthers">
          <span className="articleCardTitle">{article.title}</span>
          <p className="articleCardText">{`${article.summary}...`}</p>
          <div className="w-100 d-flex justify-content-end">
            <Link
              to={`/article/${article.id}/${article.slug}`}
              className="readMore"
            >
              Devamını oku...
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Card;
