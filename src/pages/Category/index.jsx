import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Articles from "../../components/Articles";
import { getCategoryById } from "../../context/actions/categories";
import { getPostsByCategoryId } from "../../context/actions/posts";
import Seo from "../../components/Seo";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryById(id));
    dispatch(getPostsByCategoryId(id));
  }, [dispatch, id]);
  const posts = useSelector((state) => state?.posts?.data?.results);
  const category = useSelector(
    (state) => state?.category?.data?.categories?.name
  );
  return (
    <>
      <Seo title={category} />
      <Articles articles={posts} name={category} />
    </>
  );
};

export default CategoryPage;
