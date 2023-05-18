import React from "react";
import moment from "moment";

const CardNews = ({ item, handleLinkClick }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card card-news">
        <img
          className="img-fluid card-news-img-news"
          src={`${process.env.REACT_APP_NY_TIMES_IMG_URL}${item.multimedia[0].url}`}
          alt=""
        />
        <div className="d-flex justify-content-between my-1">
          <span className="f-sm f-serif color-gray fw-medium">
            {item.subsection_name}
          </span>
          <span className="f-xs f-sans-serif color-gray align-self-center">
            {moment(item.pub_date).format("MMM. DD, YYYY")}
          </span>
        </div>
        <a
          href={item.web_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="f-md f-serif color-dark fw-bold card-news-text-title"
        >
          {item.headline.main}
        </a>
        <span className="f-sm f-sans-serif color-dark card-news-text-description">
          {item.abstract}
        </span>
      </div>
    </div>
  );
};

export default CardNews;
