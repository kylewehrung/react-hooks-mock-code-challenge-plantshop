import React from "react";

function Search({ setSearch }) {
const { search } = setSearch //added this to add search as value

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}        //didn't originally have this, still worked but not controlled
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
