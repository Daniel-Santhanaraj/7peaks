import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import bookmarkIcon from "../images/bookmark.svg";
import pic from "../images/placeholder.jpg";
function News() {
  const [news, setNews] = useState(
    JSON.parse(localStorage.getItem("activeNews"))
  );

  const [isb, setISB] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    let obj = localStorage.getItem("bookmark");
    let objArr = JSON.parse(obj);
    if (obj !== null) {
      const check = objArr.filter((b) => b.id === news.id);
      if (check.length > 0) {
        setISB(true);
      }
    }
  }, []);

  const updateBookMark = () => {
    document.querySelector(".toast").style.display = "block";
    let obj = localStorage.getItem("bookmark");
    let objArr = JSON.parse(obj);
    if (obj === null) {
      localStorage.setItem("bookmark", JSON.stringify([news]));
    } else {
      const check = objArr.filter((b) => b.id === news.id);
      if (check.length > 0) {
        for (var i = 0; i < objArr.length; i++) {
          if (objArr[i].id === news.id) {
            objArr.splice(i, 1);
          }
        }
        localStorage.setItem("bookmark", JSON.stringify(objArr));
      } else {
        localStorage.setItem("bookmark", JSON.stringify([news, ...objArr]));
      }
    }
    setISB(!isb);
    setToast(!toast);
    setTimeout(() => {
      try {
        document.querySelector(".toast").style.display = "none";
      } catch (err) {}
    }, 4000);
  };

  return (
    <>
      <div className="container section news">
        <div className="heading-section">
          <button onClick={updateBookMark}>
            <img src={bookmarkIcon} alt="image" />
            {isb ? "Remove Bookmark" : "Add Bookmark"}
          </button>
          <span className="date">
            {new Date(news.webPublicationDate).toGMTString()}
          </span>
          <h1>{news.webTitle}</h1>
          <h2>{news.fields.headline}</h2>
        </div>
        <div className="content-section">
          <div className="img-section">
            <img
              src={news.fields.thumbnail ? news.fields.thumbnail : pic}
              alt="banner"
            />
            <p dangerouslySetInnerHTML={{ __html: news.fields.standfirst }}></p>
          </div>
          <div
            className="text-section"
            dangerouslySetInnerHTML={{ __html: news.fields.body }}
          ></div>
        </div>
      </div>
      {isb ? (
        <div className="toast green">
          <p>
            <img src={bookmarkIcon} alt="image" /> saved to bookmarks
          </p>
        </div>
      ) : (
        <div className="toast red">
          <p>
            <img src={bookmarkIcon} alt="image" /> removed from bookmarks
          </p>
        </div>
      )}
    </>
  );
}

export default News;
