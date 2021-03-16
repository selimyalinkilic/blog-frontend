import React from "react";
import { Helmet } from "react-helmet-async";

const ArticlesSeo = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
    </Helmet>
  );
};

export default ArticlesSeo;
