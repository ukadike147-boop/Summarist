import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="foryou">
      <Sidebar />

      <div className="foryou__content">
        <h1 className="settings__title">Settings</h1>

        {user ? (
          <div className="settings__details">
            <h3>Your Subscription plan</h3>
            <p>Basic</p>
            <button
  className="settings__button"
  onClick={() => navigate("/choose-plan")}
>
  Upgrade to Premium
</button>


            <hr />

            <h3>Email</h3>
            <p>{user.email}</p>
          </div>
        ) : (
          <div className="settings__login">
            <h3>Log in to your account to see your details.</h3>
            <button>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;