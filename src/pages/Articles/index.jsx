import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../../components/Articles";
import { getAllPosts } from "../../context/actions/posts";
import Seo from "../../components/Seo";
const ArticlesPage = () => {
  const dispatch = useDispatch();
  const [page] = useState(0);
  const [limit] = useState(10);
  const [sort] = useState("desc");
  useEffect(() => {
    dispatch(getAllPosts(page, limit, sort));
  }, [dispatch, page, limit, sort]);
  const posts = useSelector((state) => state?.posts?.data?.posts?.rows);
  return (
    <>
      <Seo />
      <Articles articles={posts} />
    </>
  );
};

export default ArticlesPage;
