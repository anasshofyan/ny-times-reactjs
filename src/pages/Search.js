import React, { useEffect, useState } from "react";
import axios from "axios";
import NavTitle from "../components/NavTitle";
import CardNews from "../components/CardNews";
import CardLoading from "../components/CardLoading";
import InputSearch from "../components/InputSearch";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [displayedCount, setDisplayedCount] = useState(8);
  const [hits, setHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [countLoading, setCountLoading] = useState(8);

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
      setHits(response.data.response.meta.hits);
      setData(allDataNews);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setDisplayedCount(displayedCount + 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAllData();
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open(e.target.href, "_blank");
  };

  const displayedData = data.slice(0, displayedCount);
  const hasMoreData = displayedCount < data.length;

  return (
    <div className="container">
      <NavTitle />
      <InputSearch
        handleSubmit={handleSubmit}
        hits={hits}
        setQuery={setQuery}
      />
      <div className="row">
        {!loading
          ? displayedData.map((item) => (
              <CardNews
                key={item._id}
                item={item}
                handleLinkClick={handleLinkClick}
              />
            ))
          : Array.from({ length: countLoading }, (_, i) => (
              <CardLoading key={i} />
            ))}
        <div className="d-flex justify-content-center my-4">
          {hasMoreData ? (
            <button
              className="btn btn-secondary btn-show-more"
              onClick={handleShowMore}
            >
              Show More
            </button>
          ) : (
            <button className="btn btn-secondary btn-show-more" disabled>
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
