import React, { useEffect, useState } from "react";
import axios from "axios";
import NavTitle from "../components/NavTitle";
import ICEmpty from "../assets/images/ic_empty.png";
import CardNews from "../components/CardNews";
import CardLoading from "../components/CardLoading";
import InputSearch from "../components/InputSearch";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [displayedCount, setDisplayedCount] = useState(8);
  const [hits, setHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [countLoading] = useState(8);
  const [hasMoresData, setHasMoresData] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async (page = 0) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_NY_TIMES_API_BASE_URL}articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NY_TIMES_API_KEYS}&page=${page}`
    );
    setLoading(false);
    const allDataNews = response.data.response.docs;
    setHits(response.data.response.meta.hits);

    setData((prevData) => (page > 0 ? [...prevData, ...allDataNews] : allDataNews));

    if (allDataNews.length === 0) {
      setHasMoresData(false);
    } else {
      setHasMoresData(true);
    }
  } catch (e) {
    toast.error(`${e.message} (${e.request.statusText})`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setLoading(false);
  }
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

  const handleShowMores = () => {
  setDisplayedCount(displayedCount + 8);
  if (!hasMoreData) {
    const nextPage = Math.floor(displayedCount / 8) + 1;
    fetchAllData(nextPage);
  }
};
  return (
    <div className="container">
      <ToastContainer />
      <NavTitle />
      <InputSearch
        handleSubmit={handleSubmit}
        hits={hits}
        setQuery={setQuery}
      />
      {hits !== 0 ? (
        <section>
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
              {hasMoresData ?
            <button
                  className="btn btn-secondary btn-show-more"
                  onClick={handleShowMores}
                >
                  Show More
                </button>
                :
                <button
                  className="btn btn-secondary btn-show-more"
                  disabled
                >
                  Show More
                </button>
            }
                
            </div>
          </div>
        </section>
      ) : (
        <section className="d-flex justify-content-center">
          <div className="text-center">
            <img
              src={ICEmpty}
              className="img-fluid img-search"
              alt="IC Empty"
            />
            <p className="f-sm f-sans-serif mt-3">
              Showing <strong>{hits}</strong> results
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Search;
