import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for books" />
      <AiOutlineSearch />
    </div>
  );
}

export default SearchBar;