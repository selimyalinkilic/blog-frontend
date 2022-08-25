import React from "react";
import { Helmet } from "react-helmet-async";

const ArticleSeo = ({ article }) => {
  return (
    <Helmet>
      <title>{article?.title}</title>
      <meta name="title" content={article?.title} data-react-helmet="true" />
      <meta
        name="description"
        content={article?.summary}
        data-react-helmet="true"
      />
      <meta
        name="author"
        content={article?.author?.username}
        data-react-helmet="true"
      />
      <meta name="twitter:card" content="summary" data-react-helmet="true" />
      <meta name="twitter:site" content="@Yagizdoo" data-react-helmet="true" />
      <meta
        name="twitter:title"
        content={article?.title}
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content={article?.summary}
        data-react-helmet="true"
      />
      <meta
        name="twitter:creator"
        content="@Yagizdoo"
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content={article?.thumbnail}
        data-react-helmet="true"
      />
      {/* <meta
        name="twitter:image:src"
        content={article?.thumbnail}
        data-react-helmet="true"
      />
      <meta
        name="twitter:image:alt"
        content={article?.summary}
        data-react-helmet="true"
      /> */}
      <meta
        property="og:url"
        content={window.location.href}
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content={article?.title}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={article?.summary}
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={article?.thumbnail}
        data-react-helmet="true"
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:locale:alternate" content="en_GB" />
    </Helmet>
  );
};

export default ArticleSeo;
