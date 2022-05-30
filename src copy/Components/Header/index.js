import React, { useState, useEffect } from "react";
import "./index.scss";
import logo from "../../images/logo.svg";
function Header({ isVisible, value, getQuery, query }) {
  const enableSeach = (e) => {
    e.preventDefault();
    isVisible(true);
  };

  const querySet = (e) => {
    e.preventDefault();
    getQuery(e.target.value);
  };

  const handleClickOutside = (e) => {
    e.preventDefault();
    getQuery("");
    isVisible(false);
  };
  document.addEventListener("click", handleClickOutside, true);

  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo" />

        <div className={value ? "active search-section" : "search-section"}>
          <input
            type="text"
            name="seach"
            placeholder="Search all news"
            value={query}
            onFocus={(e) => querySet(e)}
            onClick={(e) => enableSeach(e)}
            onChange={(e) => querySet(e)}
          />
          <span onClick={(e) => enableSeach(e)}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
