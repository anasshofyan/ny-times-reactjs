import React from "react";
import ImgLoad from "../assets/images/img_loading.png";

const CardLoading = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card card-news placeholder-glow">
        <img
          className="img-fluid card-news-img-news mb-2"
          src={ImgLoad}
          alt=""
        />
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
      </div>
    </div>
  );
};

export default CardLoading;
