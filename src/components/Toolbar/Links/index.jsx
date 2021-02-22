import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../../../context/actions/categories";
import "./Links.css";

const Links = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories?.data?.categories);
  return (
    <Nav className="flex-column menuLinks">
      {categories
        ?.filter((item) => item.name !== "Genel")
        .map((item) => (
          <Nav.Item key={item.id}>
            <NavLink
              to={`/category/${item.id}`}
              className="nav-link"
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default Links;
