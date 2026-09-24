import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

function ForYou() {
  return (
    <div className="foryou">
      <Sidebar />
      <div className="foryou__content">
        <SearchBar />
        <h1>For You</h1>
      </div>
    </div>
  );
}

export default ForYou;