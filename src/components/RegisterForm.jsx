import React, { Component } from 'react';
import Joi from 'joi-browser';
import { register } from '../services/userService.js';
import { login, loginWithJWT } from '../services/authService.js';
import Form from './common/Form';

class RegisterForm extends Form {
  state = {
    data: { email: '', password: '', name: '' },
    errors: {},
  };
  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
      .label('Email'),
    password: Joi.string().min(5).max(30).required().label('Password'),
    name: Joi.string().required().label('Name'),
  };
  doSubmit = async () => {
    try {
      const {
        data: { accessToken: jwt },
      } = await register(this.state.data);
      loginWithJWT(jwt);
      window.location = '/recipes';
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container-form">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'email', true)}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
