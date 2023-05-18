import React from "react";

const InputSearch = ({ hits, handleSubmit, setQuery }) => {
  return (
    <form className="mb-4" onSubmit={handleSubmit}>
        <div className="input-group input-search">
          <input
            type="search"
            className="form-control form-input form-search disable-focus-shadow"
            id="floatingInput"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="input-group-text btn-search">
            <i className="bi bi-search"></i>
          </button>
        </div>
        {
          <div className="mt-1 f-xs f-sans-serif color-gray">
            Total result {hits}
          </div>
        }
      </form>
  );
};

export default InputSearch;
