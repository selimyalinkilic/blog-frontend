import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../../components/Articles";
import { getAllPosts } from "../../context/actions/posts";

const ArticlesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state?.posts?.data?.results);
  return <Articles articles={posts} />;
};

export default ArticlesPage;
