import React, { useState, useEffect } from "react";
import TopStories from "../Components/TopStories";
import Result from "../Components/Result";
import Filters from "../Components/Filters";
import axios from "axios";
import Loader from "../Components/Loader";

let API_PARAM = {
  endpoint: "https://content.guardianapis.com/search",
  show_fields: "all",
  API_KEY: "09c44cef-e99f-4a55-b793-753722ebbb1d",
  use_date: "published",
};

function Home({ query }) {
  const [topStories, setTopStories] = useState(null);
  const [sports, setSports] = useState(null);
  const [filter, setFilter] = useState("newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      fetchData(filter, 8, "Top Search", setTopStories);
      fetchData(filter, 3, "Sports", setSports);
    } else {
      fetchData(filter, 9, query, setSports);
    }
  }, [filter, query]);

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
    <>
      {loading && <Loader />}
      <Filters
        filter={(filter) => setFilter(filter)}
        value={filter}
        title={query ? "Search results" : "Top Stories"}
      />
      {query && <Result results={sports} />}
      {topStories && !query && <TopStories results={topStories} />}
      {sports && !query && <Result results={sports} title="Sports" />}
    </>
  );
}

export default Home;
