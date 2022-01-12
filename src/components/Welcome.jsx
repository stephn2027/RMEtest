import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  function redirectToLogin(props) {
    navigate('/recipes'); 
  }

  return (
    <div>
      <p>You are already logged in. Click button to be redirected to recipes </p>
      <input
        type="submit"
        name="recipes"
        id="recipes"
        value="Recipes"
        onClick={redirectToLogin}
      />
    </div>
  );
}

export default Welcome;
