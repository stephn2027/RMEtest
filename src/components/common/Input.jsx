import React from 'react'

export default function Input({name,label,error,autoFocus,...rest}) {
    return (
        <div className="form-group">
        <label htmlFor="username">{label}</label>
        <input
          autoFocus={autoFocus}
          id={name}
          name={name}
          {...rest}
          className="form-control"
          
          
        />
        {error&&<div className="alert alert-danger">{error}</div>}

        </div>
    )
}
