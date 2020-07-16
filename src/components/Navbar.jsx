import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div class="sidebar">
        <NavLink
          exact
          className="sidebar-navLink"
          activeClassName="active-link"
          to="/"
        >
          <i class="fa fa-home"> </i> Home
        </NavLink>
        <NavLink
          exact
          className="sidebar-navLink"
          activeClassName="active-link"
          to="/about"
        >
          <i class="fas fa-user"> </i> About
        </NavLink>
        <NavLink
          exact
          className="sidebar-navLink"
          activeClassName="active-link"
          to="/education"
        >
          <i class="fas fa-user-graduate"></i> Education
        </NavLink>
        <NavLink
          exact
          className="sidebar-navLink"
          activeClassName="active-link"
          to="/skill"
        >
          <i class="fa fa-cogs" aria-hidden="true"></i> Skills
        </NavLink>
        <NavLink
          exact
          className="sidebar-navLink"
          activeClassName="active-link"
          to="/project"
        >
          <i class="fa fa-tasks" aria-hidden="true"></i> Projects
        </NavLink>
        <NavLink
          exact
          className="sidebar-navLink"
          activeClassName="active-link"
          to="/achievement"
        >
          <i class="fas fa-award"> </i> Achievements
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
