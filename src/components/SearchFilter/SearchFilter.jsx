import './SearchFilter.css';

function SearchFilter({filterOrigin, onUpdateSearch, onSelectFilter}) {
  const originData = [
    {origin: 'All', label: 'All'},
    {origin: 'Brazil', label: 'Brazil'},
    {origin: 'Kenya', label: 'Kenya'},
    {origin: 'Rwanda', label: 'Rwanda'}
  ];

  const buttons = originData.map(({origin, label}) => {
    const active = filterOrigin === origin;
    const clazz = active ? 'search-filter__region-btn--active' : '';

    return (
      <button
        className={`search-filter__region-btn ${clazz}`.trim()}
        key={origin}
        onClick={() => onSelectFilter(origin)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="search-filter">
      <div className="search-filter__query">
        <label className="search-filter__label" htmlFor="search-input">
          Looking for
        </label>
        <input
          className="search-filter__input"
          onChange={e => onUpdateSearch(e.target.value)}
          id="search-input"
          type="text"
          placeholder="start typing here..."
        />
      </div>

      {/* Filter by region */}
      <div className="search-filter__region">
        <p className="search-filter__region-title">Or filter</p>
        <div className="search-filter__region-btns">{buttons}</div>
      </div>
    </div>
  );
}

export default SearchFilter;
