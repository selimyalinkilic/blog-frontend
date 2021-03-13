import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../../components/Articles";
import { getAllPosts } from "../../context/actions/posts";
import Seo from "../../components/Seo";
import LoadMore from "../../components/LoadMoreButton";
import ContentLoader from "../../components/CustomLoaders/ContentLoader";
import MainLayout from "../../layouts/MainLayout";

const ArticlesPage = () => {
  const dispatch = useDispatch();
  const [page] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort] = useState("desc");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllPosts(page, limit, sort));
  }, [dispatch, page, limit, sort]);
  const posts = useSelector((state) => state?.posts?.data?.posts?.rows);
  const fetchMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLimit(limit + 10);
      setLoading(false);
    }, 2000);
  };
  return (
    <MainLayout>
      <Seo />
      <div className={`articles ${loading === true ? "loading" : ""}`}>
        <Articles articles={posts} />
        {loading === true && <ContentLoader />}
        {limit === posts?.length && <LoadMore handleClick={fetchMore} />}
      </div>
    </MainLayout>
  );
};

export default ArticlesPage;
