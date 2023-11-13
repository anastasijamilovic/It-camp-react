import { useState } from "react";

const Search = () => {
  const [data, setData] = useState();
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const params = new URLSearchParams();

  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/random?";

      if (minLength !== "" && minLength !== "0") {
        apiURL += "?minLength=" + minLength;
      }

      if (maxLength !== "" && maxLength !== "0") {
        apiURL += apiURL.includes("?") ? "&" : "?";
        apiURL += "maxLength=" + maxLength;
      }

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
        type="number"
        name="minLength"
        value={minLength}
        onChange={(e) => setMinLength(e.target.value)}
        placeholder="min"
      />
      <input
        type="number"
        name="maxLength"
        placeholder="max"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
      />
      <button onClick={getQuote}>Get quote</button>

      <p>Author: {data?.author}</p>
      <p>Quote: {data?.content}</p>
    </div>
  );
};

export default Search;
