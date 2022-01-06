import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate=useNavigate();
    
    function redirectToLogin(props){ 
       
       navigate('/login');


}

        
    return (
        <div>
            Welcome to our page! log-in to access your recipes. 
            <input type="submit" name="login" id="login" value="Log-in" onClick={redirectToLogin}/>

        </div>
    )

    
}

export default Welcome
