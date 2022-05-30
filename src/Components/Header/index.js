import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../images/logo.svg";
function Header({ isVisible, value, getQuery, query }) {
  const enableSeach = (e) => {
    e.preventDefault();
    navigate("/");
    getQuery("");
    isVisible(true);
  };

  const searchFocus = (e) => {
    e.preventDefault();
    isVisible(true);
  };

  const querySet = (e) => {
    e.preventDefault();
    getQuery(e.target.value);
  };

  const handleClickOutside = (e) => {
    e.preventDefault();
    isVisible(false);
  };
  document.addEventListener("click", handleClickOutside, true);
  let navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />

        <div className={value ? "active search-section" : "search-section"}>
          <input
            type="text"
            name="seach"
            placeholder="Search all news"
            value={query}
            onFocus={(e) => querySet(e)}
            onClick={(e) => searchFocus(e)}
            onChange={(e) => querySet(e)}
          />
          <span onClick={(e) => enableSeach(e)}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
