import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../../../context/actions/categories";
import MenuLoader from "../../CustomLoaders/MenuLoader";

const Links = ({ toggleClass }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories?.data?.categories);
  return (
    <Nav className="flex-column menuLinks">
      {categories ? (
        categories
          .sort((a, b) => b.placement - a.placement)
          .map((item) => (
            <Nav.Item key={item.id}>
              <NavLink
                to={`/category/${item.id}/${item.slug}`}
                className="nav-link"
                activeClassName="active"
                onClick={toggleClass}
              >
                {item.name}
              </NavLink>
            </Nav.Item>
          ))
      ) : (
        <MenuLoader />
      )}
    </Nav>
  );
};

export default Links;
