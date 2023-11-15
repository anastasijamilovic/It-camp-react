import React, { useState } from "react";

function Search() {
  const [data, setData] = useState();

  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/search/quotes";
      //   apiURL += "?query=" + searchQ;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        // value={searchQ}
        type="text"
        // onChange={(e) => setSearchQ(e.target.value)}
      />

      <button onClick={getQuote}>Get quote</button>

      <div className="quote-cards">
        {data?.results?.map((quote) => {
          return (
            <div className="quote-card" key={quote._id}>
              <p>{quote.author}</p>
            </div>
          );
        })}
      </div>

      <p>Author: {data?.author}</p>
      <p>Quote: {data?.content}</p>

      <div style={{ display: "flex" }}>
        <button>{"<"}</button>
        <button
          style={{ backgroundColor: data?.page === 1 ? "white" : "buttonface" }}
        >
          1
        </button>
        {data?.totalPages > 2 && (
          <button>{data?.page > 1 ? data?.page : 2}</button>
        )}
        {data?.totalPages > 3 && <button>{data.totalPages}</button>}
        <button>{">"}</button>
      </div>
    </div>
  );
}

export default Search;
