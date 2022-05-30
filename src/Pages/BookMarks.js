import React, { useState, useEffect } from "react";
import Result from "../Components/Result";
import Filters from "../Components/Filters";

function BookMarks() {
  const [filter, setFilter] = useState("newest");
  const [books, setBooks] = useState(null);
  useEffect(() => {
    let bk = JSON.parse(localStorage.getItem("bookmark"));
    if (filter == "newest") {
      bk.sort(function (a, b) {
        return new Date(a.webPublicationDate) - new Date(b.webPublicationDate);
      });
    } else {
      bk.sort(function (a, b) {
        return new Date(b.webPublicationDate) - new Date(a.webPublicationDate);
      });
    }
    setBooks(bk);
  }, [filter]);
  return (
    <div className="bookmark">
      <Filters
        filter={(filter) => setFilter(filter)}
        value={filter}
        title={"All bookmark"}
      />
      {books && <Result results={books} />}
    </div>
  );
}

export default BookMarks;
