import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookmark from "../../images/bookmark.svg";
import "./index.scss";
function Filters({ filter, value, title }) {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="title-section">
        <h1>{title}</h1>
        <div className="filters">
          {title !== "All bookmark" && (
            <button onClick={() => navigate(`/bookmarks`)}>
              <img src={bookmark} alt="image" />
              View Bookmark
            </button>
          )}

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
