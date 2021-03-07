import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../../../context/actions/categories";
import MenuLoader from "../../CustomLoaders/MenuLoader";
import "./Links.css";

const convertToSlug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

const Links = ({ toggleClass }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories?.data?.categories);
  return (
    <Nav className="flex-column menuLinks">
      {categories ? (
        categories.map((item) => (
          <Nav.Item key={item.id}>
            <NavLink
              to={`/category/${item.id}/${convertToSlug(item.name)}`}
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
