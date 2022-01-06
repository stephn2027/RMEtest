import React from 'react';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Welcome from './Welcome';
import NotFound from './NotFound';
import Navbar from './Navbar';
import { Route,Routes,Navigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
export default function Home() {
    return (
        <React.Fragment>
        <Navbar></Navbar>

           <div style={{paddingTop:'80px'}}>
        <Routes>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/recipes" element={<App/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route exact path="/" element={<Welcome/>}></Route>
            <Route path="/not-found" element={<NotFound></NotFound>}></Route>
            <Route path="*" element={<Navigate to="/not-found"/>}></Route>
        </Routes>
        </div>
        
        

        
        <Footer/>
            
        </React.Fragment>
    )
}
