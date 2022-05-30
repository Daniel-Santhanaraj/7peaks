import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Search from "./Pages/Search";
import BookMarks from "./Pages/BookMarks";
import Header from "./Components/Header";

import "./App.scss";

function App() {
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);

  return (
    <div className="App">
      <Header
        isVisible={(val) => setVisible(val)}
        value={visible}
        getQuery={(query) => setQuery(query)}
        query={query}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home query={query} getNews={(news) => setNews(news)} />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/bookmarks" element={<BookMarks />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
