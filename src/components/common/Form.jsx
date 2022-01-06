import React, { Component} from 'react'
import Joi from 'joi-browser';
import Input from './Input';
class Form extends Component {

state={
  data:{},
  errors:{}
};
 

validate = ()=>{
    const options = {abortEarly:false} 
    const {error} = Joi.validate(this.state.data,this.schema,options);
    if(!error) return null;
    const errors = {};
    error.details.map(
        item=>{
        errors[item.path[0]] = item.message;  
       });
       return errors;
    
 };

 validateProperty=({name,value})=>{
   const property ={[name]:value};
   const propertySchema = {[name]:this.schema[name]}
   const {error} =Joi.validate(property,propertySchema)
   return error?error.details[0].message:null;
 };

 handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors:errors||{}});
    if(errors)return;
    //no errors, proceed with calling server request
    this.doSubmit();
  };

 handleChange = ({currentTarget:input}) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({data});

    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    errorMessage?errors[input.name]=errorMessage:delete errors[input.name];
    this.setState({errors});
  };
   renderButton(label){
      return (<button disabled={this.validate()} className="btn btn--primary">{label}</button>)
  }
   renderInput(name,label,type="text",autoFocus=false){
     const {data,errors} = this.state;
     return (
      <Input 
      name={name}
      value={data[name]}
      onChange={this.handleChange}
      label ={label}
       error={errors[name]}
       type={type}
       autoFocus={autoFocus}
      />
     )
   }


    
}
export default Form;
