import React, { Component } from 'react';
import Form from './common/Form';
import Joi from 'joi-browser';
import {register} from '../services/userService.js';
class RegisterForm extends Form {

    state={
        data:{email:"",password:"",name:""},
        errors:{}
    }
    schema ={
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).label("Email"),
        password: Joi.string().min(5).max(30).required().label("Password"),
        name: Joi.string().required().label("Name")
    }
    doSubmit = async ()=>{
        await register(this.state.data);
        console.log("Registered")
    }

    render() {
        return (
            <div className='container'>
                <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("email","Email","email",true)}
                {this.renderInput("password","Password","password")}
                {this.renderInput("name","Name")}
                {this.renderButton("Register")}
            </form>
            </div>

        );
    }
}



export default RegisterForm;