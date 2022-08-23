import React from 'react'
import styles from './Button.css'
import Mtable from './Mtable'




function Button( props ) {
  return (
    <div>
         <button className='btn'>
        {props.text}</button>
    </div>
  )
}

export default Button