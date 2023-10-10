import "./Logout.css";
import { useContext } from "react";
import { SessionContext } from "../../App";

const Logout = () => {
  const { setIsLoggedIn } = useContext(SessionContext);

  const API = "https://password-reset-mjhd.onrender.com/logout";
  const logout = async () => {
    fetch(API)
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        setIsLoggedIn(false);
        alert(post.message);
      });
  };

  return (
    <div className="logout">
      <p>Write Logout Logic Here</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
