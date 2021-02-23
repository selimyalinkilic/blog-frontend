import React from "react";
import { Helmet } from "react-helmet";

const index = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title || "Yılmaz Yağız Dokumacı - Blog"}`}</title>
    </Helmet>
  );
};

export default index;
