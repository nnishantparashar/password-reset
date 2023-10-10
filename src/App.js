import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import ForgotPasswordForm from "./components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import ResetPasswordForm from "./components/Forms/ResetPasswordForm/ResetPasswordForm";
import Logout from "./components/Logout/Logout";
import React, { createContext, useState } from 'react';
import "./App.css";

export const SessionContext = createContext({});
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  

  return (
    <div className="App">
      <SessionContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
