import React from 'react'
import styles from './Button.css'
import Mtable from './Mtable'
import { useState } from 'react';



function Button( props ) {


const  [botaoInativo, setBotaoInativo] = useState(false);


const inativarBotao = () => {
  setBotaoInativo(!botaoInativo)
}

  return (
    <div>
         <button className='btn' data-active={botaoInativo} onClick={inativarBotao} >
         {botaoInativo ? 'Ativo': 'Inativo'}   
        </button>
    </div>
  )
}

export default Button