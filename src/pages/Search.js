import React from "react";
import NavTitle from "../components/NavTitle";

function Search() {
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
    </div>
  );
}

export default Search;
