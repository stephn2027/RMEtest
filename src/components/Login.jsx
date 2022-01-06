import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi-browser';
import Input from './common/Input';
import '../css/login.css';

function Login() {
  const navigate = useNavigate();
  
  const [data, setdata] = useState({ username: '', password: '' });
  const [errors,setErrors] = useState({});

  const schema = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password")
 }

  const validate = ()=>{
     const options = {abortEarly:false} 
     const {error} = Joi.validate(data,schema,options);
     if(!error) return null;
     const errors = {};
     error.details.map(
         item=>{
         errors[item.path[0]] = item.message;  
        });
        return errors;
     
  };

  const validateProperty=({name,value})=>{
    const property ={[name]:value};
    const propertySchema = {[name]:schema[name]}
    const {error} =Joi.validate(property,propertySchema)
    return error?error.details[0].message:null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    
    setErrors(errors||{});
    if(errors)return;
    //no errors, proceed with calling server request
    console.log('attempt to log');

  };
  const handleChange = ({currentTarget:input}) => {
    const datacopy = { ...data };
    datacopy[input.name] = input.value;
    setdata(datacopy);

    const errorsCopy = {...errors};
    const errorMessage = validateProperty(input);
    errorMessage?errorsCopy[input.name]=errorMessage:delete errorsCopy[input.name];
    setErrors(errorsCopy);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
       <Input 
       name="username"
       value={data.username}
       onChange={handleChange}
       label ="Username"
        error={errors.username}
        type="text"
       />
       <Input 
       type="password"
       name="password"
       value={data.password}
       onChange={handleChange}
       label ="Password"
        error={errors.password}
       />
        
       
        <button disabled={validate()} className="btn btn--primary">Login</button>
      </form>
      <div>
        <input type="submit" value="⏎ home" onClick={() => navigate('/')} />
      </div>
    </div>
  );
}


export default Login;
