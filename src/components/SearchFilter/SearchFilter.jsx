import './SearchFilter.css';

function SearchFilter({onUpdateSearch}) {
  return (
    <div className="search-filter">
      <div className="search-filter__query">
        <label className="search-filter__label" htmlFor="search-input">
          Looking for
        </label>
        <input
          className="search-filter__input"
					onChange={(e) => onUpdateSearch(e.target.value)}
          id="search-input"
          type="text"
          placeholder="start typing here..."
        />
      </div>

			{/* Filter by region */}
      <div className="search-filter__region">
        <p className="search-filter__region-title">
          Or filter
        </p>
        <div className="search-filter__region-btns">
          <button className="search-filter__region-btn">Brazil</button>
          <button className="search-filter__region-btn">Kenya</button>
          <button className="search-filter__region-btn">Columbia</button>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;