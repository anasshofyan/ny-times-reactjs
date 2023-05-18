import React, { useEffect, useState } from "react";
import axios from "axios";
import NavTitle from "../components/NavTitle";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("jokowi");
  const [displayedCount, setDisplayedCount] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_NY_TIMES_API_BASE_URL}articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NY_TIMES_API_KEYS}`
      );
      setLoading(false);
      const allDataNews = response.data.response.docs;
      setData(allDataNews);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setDisplayedCount(displayedCount + 2);
  };

  const displayedData = data.slice(0, displayedCount);

  console.log(data);
  return (
    <div className="container">
      <NavTitle />
      <form className="mb-3">
        <div className="input-group input-search">
          <input
            type="search"
            className="form-control form-input form-search disable-focus-shadow"
            id="floatingInput"
            placeholder="Search"
          />
          <button className="input-group-text btn-search">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
      <div>
        {/* Tampilkan data */}
        {displayedData.map((item) => (
          <div key={item._id}>
            {/* Tampilkan konten data */}
            <h2>{item.headline.main}</h2>
            <p>{item.abstract}</p>
          </div>
        ))}
        {/* Tombol "show more" */}
        <button onClick={handleShowMore}>Show More</button>
      </div>
    </div>
  );
}

export default Search;
