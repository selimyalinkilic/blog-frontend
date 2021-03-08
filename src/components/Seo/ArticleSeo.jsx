import React from "react";
import { Helmet } from "react-helmet-async";

const ArticleSeo = ({ article }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Yagizdoo" />
      <meta name="twitter:creator" content="@Yagizdoo" />
      <meta
        property="og:url"
        content={`https://blog.yagizdokumaci.com/` + window.location.pathname}
      />
      <meta property="og:title" content={article?.title} />
      <meta property="og:description" content={article?.summary} />
      <meta property="og:image" content={article?.thumbnail} />
    </Helmet>
  );
};

export default ArticleSeo;
