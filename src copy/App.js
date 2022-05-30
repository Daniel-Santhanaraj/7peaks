import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Search from "./Pages/Search";
import BookMarks from "./Pages/BookMarks";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import TopStories from "./Components/TopStories";
import Result from "./Components/Result";
import Filters from "./Components/Filters";
import "./App.scss";
import axios from "axios";
import bookmark from "./images/bookmark.svg";

let API_PARAM = {
  endpoint: "https://content.guardianapis.com/search",
  show_fields: "all",
  API_KEY: "09c44cef-e99f-4a55-b793-753722ebbb1d",
  use_date: "published",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [topStories, setTopStories] = useState(null);
  const [sports, setSports] = useState(null);
  const [result, setResult] = useState(null);
  const [filter, setFilter] = useState("newest");
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData(filter, 8, "Top Search", setTopStories);
    fetchData(filter, 3, "Sports", setSports);
  }, [filter]);

  // useEffect(() => {
  //   query && fetchData(filter, 8, query, setResult);
  // }, [query]);

  const fetchData = async (order_by, page_size, q, setVal) => {
    const API = `${API_PARAM.endpoint}?order-by=${order_by}&use-date=${API_PARAM.use_date}&page-size=${page_size}&q=${q}&api-key=${API_PARAM.API_KEY}&show-fields=${API_PARAM.show_fields}`;
    setLoading(true);
    const {
      data: {
        response: { results },
      },
    } = await axios.get(API);
    setVal(results);
    setLoading(false);
  };

  return (
    <div className="App">
      {loading && <Loader />}
      <Header
        isVisible={(val) => setVisible(val)}
        value={visible}
        getQuery={(query) => setQuery(query)}
        query={query}
      />
      {!loading && (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/bookmarks" element={<BookMarks />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Router>

          <footer></footer>
        </>
      )}
    </div>
  );
}

export default App;

// <div className="App">
// {loading && <Loader />}
// <Header
//   isVisible={(val) => setVisible(val)}
//   value={visible}
//   getQuery={(query) => setQuery(query)}
//   query={query}
// />
// {!loading && (
//   <>
//     <Filters filter={(filter) => setFilter(filter)} value={filter} />

//     {topStories && !query && <TopStories results={topStories} />}
//     {sports && !query && <Result results={sports} title="Sports" />}
//     {/* {query && <Result results={result} title="Search results" />} */}
//     <footer></footer>
//   </>
// )}
// </div>
