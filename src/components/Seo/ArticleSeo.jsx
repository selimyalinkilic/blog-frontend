import React from "react";
import { Helmet } from "react-helmet-async";

const ArticleSeo = ({ article }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Yagizdoo" />
      <meta name="twitter:title" content={article?.title} />
      <meta name="twitter:description" content={article?.summary} />
      <meta name="twitter:image" content={article?.thumbnail} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={article?.title} />
      <meta property="og:description" content={article?.summary} />
      <meta property="og:image" content={article?.thumbnail} />
    </Helmet>
  );
};

export default ArticleSeo;
