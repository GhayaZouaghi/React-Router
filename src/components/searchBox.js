import React from "react";

const SearchBox = ({ setSearchValue, searchValue }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
