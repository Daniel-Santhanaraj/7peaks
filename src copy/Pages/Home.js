import React, { useState, useEffect } from "react";
function Home() {
  return (
    <>
      <Filters filter={(filter) => setFilter(filter)} value={filter} />
      {topStories && !query && <TopStories results={topStories} />}
      {sports && !query && <Result results={sports} title="Sports" />}
    </>
  );
}

export default Home;
