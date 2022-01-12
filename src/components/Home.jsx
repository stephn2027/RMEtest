import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Welcome from './Welcome';
import NotFound from './NotFound';
import Navbar from './Navbar';
import RegisterForm from './RegisterForm';
import Logout from './Logout';

export default function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const usercopy = getCurrentUser();
    setUser(usercopy);
  }, []);

  return (
    <React.Fragment>
      <Navbar user={user} />

      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/recipes" element={(!user)?<Navigate to="/login"/>:<App user={user}/> } />
          <Route path="/login" element={<LoginForm user={user}/>} />
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/not-found" element={<NotFound></NotFound>}></Route>
          <Route path="*" element={<Navigate to="/not-found" />}></Route>
        </Routes>
      </div>

      <Footer />
    </React.Fragment>
  );
}
