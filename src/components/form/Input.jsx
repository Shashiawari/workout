import React from 'react'
import "./input.css"
const Input = (props) => {
  return (
    <div className='input my-4'>
        <input type={props.type} placeholder={props.placeholder}></input>
    </div>
  )
}

export default Input
