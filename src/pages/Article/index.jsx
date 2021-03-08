import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Article from "../../components/Article";
import { getPostById } from "../../context/actions/posts";
import ArticleSeo from "../../components/ArticleSeo";

const ArticlePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);
  const article = useSelector((state) => state?.posts?.data?.result);
  return (
    <>
      <ArticleSeo article={article} />
      <Article article={article} key={id} />
    </>
  );
};

export default ArticlePage;
