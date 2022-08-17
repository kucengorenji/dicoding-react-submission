import './SearchBar.scss';

const SearchBar = ({ onSearchNote, onClickInputNote }) => {
  return (
    <div className="search-bar">
      <div className="search-bar__title">
        <h1>Search your notes!</h1>
      </div>
      <div className="search-bar__form">
        <button onClick={onClickInputNote}>add new note!</button>
        <input
          type="text"
          placeholder="search your note here..."
          onChange={onSearchNote}
        />
      </div>
    </div>
  );
};

export default SearchBar;
