import React from 'react'
import"./imputg.css"
const Inputg = (props) => {
  return (
    <div className='formmain my-4'>
        <div className='inp'>
        <p className='mt-3'>{props.text}</p>
        <input type='checkbox'></input>
        </div>
       
    </div>
  )
}

export default Inputg
