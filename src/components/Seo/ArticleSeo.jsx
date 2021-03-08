import React from "react";
import { Helmet } from "react-helmet-async";

const ArticleSeo = ({ article }) => {
  return (
    <Helmet>
      <title>{article?.title}</title>
      <meta name="title" content={article?.title} />
      <meta name="description" content={article?.summary} />
      <meta name="author" content={article?.author?.username} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Yagizdoo" />
      <meta name="twitter:title" content={article?.title} />
      <meta name="twitter:description" content={article?.summary} />
      <meta name="twitter:creator" content="@Yagizdoo" />
      <meta name="twitter:image:src" content={article?.thumbnail} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={article?.title} />
      <meta property="og:description" content={article?.summary} />
      <meta property="og:image" content={article?.thumbnail} />
    </Helmet>
  );
};

export default ArticleSeo;
