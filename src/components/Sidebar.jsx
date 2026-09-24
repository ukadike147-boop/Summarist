import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">Summarist</h2>

      <Link to="/for-you" className="sidebar__link">
        <AiOutlineHome /> For You
      </Link>
      <Link to="/library" className="sidebar__link">
        <BsBookmark /> My Library
      </Link>
      <Link to="/settings" className="sidebar__link">
        <AiOutlineSetting /> Settings
      </Link>
      <Link to="/" className="sidebar__link">
        <BiLogOut /> Logout
      </Link>
    </div>
  );
}

export default Sidebar;