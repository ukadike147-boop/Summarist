import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <AiOutlineSearch />
    </div>
  );
}

export default SearchBar;