import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Sidebar() {
  const navigate = useNavigate();
    const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

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
      <button
  type="button"
  className="sidebar__link"
  onClick={handleLogout}
>
  <BiLogOut /> Logout
</button>
    </div>
  );
}

export default Sidebar;