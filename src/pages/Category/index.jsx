import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Articles from "../../components/Articles";
import { getCategoryById } from "../../context/actions/categories";
import { getPostsByCategoryId } from "../../context/actions/posts";
import Seo from "../../components/Seo";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [page] = useState(0);
  const [limit] = useState(10);
  const [sort] = useState("desc");
  useEffect(() => {
    dispatch(getCategoryById(id));
    dispatch(getPostsByCategoryId(id, page, limit, sort));
  }, [dispatch, id, page, limit, sort]);
  const posts = useSelector((state) => state?.posts?.data?.posts?.rows);
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
