import React, { useState, useEffect } from "react";
import bookmark from "../../images/bookmark.svg";
import "./index.scss";
function Filters({ filter, value }) {
  return (
    <div className="container">
      <div className="title-section">
        <h1>Top stories</h1>
        <div className="filters">
          <button>
            <img src={bookmark} alt="image" />
            View Bookmark
          </button>
          <select onChange={(e) => filter(e.target.value)} value={value}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
