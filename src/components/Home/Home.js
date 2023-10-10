
import { useContext } from "react";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Login from "../Login/Login";
import Register from "../Register/Register";
import './Home.css';
import { SessionContext } from "../../App";
import Logout from "../Logout/Logout";


const Home = () => {

  const { isLoggedIn } = useContext(SessionContext)
  

  return (
   
      <div className="content">
        <Register />
        {/* Based on session cookies 'accessToken' toggle Login & Logout component */}
        {!isLoggedIn && <Login/>}
        {isLoggedIn && <Logout/>}
        
        <ForgotPassword />
      </div>
    
  );
};

export default Home;
