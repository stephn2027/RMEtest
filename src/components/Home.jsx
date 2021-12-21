import React from 'react';
import App from './App';
import Header from './Header';
import Footer from './Footer';
export default function Home() {
    return (
        <React.Fragment>
        
        <div className='wrapper'>
        <Header/>

        

        <div className='container'>

        <App/>
        </div>
        
        </div>
        <Footer/>
            
        </React.Fragment>
    )
}
