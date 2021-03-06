import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Articles from "../../components/Articles";
import { getCategoryById } from "../../context/actions/categories";
import { getPostsByCategoryId } from "../../context/actions/posts";
import ContentLoader from "../../components/CustomLoaders/ContentLoader";
import LoadMore from "../../components/LoadMoreButton";
import MainLayout from "../../layouts/MainLayout";
import ArticlesSeo from "../../components/Seo/ArticlesSeo";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [page] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort] = useState("desc");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getCategoryById(id));
    dispatch(getPostsByCategoryId(id, page, limit, sort));
  }, [dispatch, id, page, limit, sort]);
  const posts = useSelector((state) => state?.posts?.data?.posts?.rows);
  const totalPosts = useSelector((state) => state?.posts?.data?.totalPosts);
  const category = useSelector(
    (state) => state?.category?.data?.categories?.name
  );
  const fetchMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLimit(limit + 10);
      setLoading(false);
    }, 2000);
  };
  return (
    <MainLayout>
      <ArticlesSeo title={category} />
      <div className={`articles ${loading === true ? "loading" : ""}`}>
        <Articles articles={posts} name={category} />
        {loading === true && <ContentLoader />}
        {limit < totalPosts && <LoadMore handleClick={fetchMore} />}
      </div>
    </MainLayout>
  );
};

export default CategoryPage;
