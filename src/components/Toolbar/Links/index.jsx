import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <Nav className="flex-column menuLinks">
      <Nav.Item>
        <NavLink to="/" className="nav-link" activeClassName="active">
          Android
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className="nav-link" activeClassName="active">
          Php
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className="nav-link" activeClassName="active">
          React
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className="nav-link" activeClassName="active">
          Java
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Links;
