import React from 'react'
import styles from './Button.css'
import Mtable from './Mtable'
import { useState } from 'react';


export function Button (props) { 

const  [statusFornecedor, setStatusForncedor] = useState(false);


const inativarBotao = () => {
  setStatusForncedor(!statusFornecedor)
}

  return (
    <div>
         <button className='btn' data-active={statusFornecedor} onClick={inativarBotao} >
         {statusFornecedor ? 'Ativo': 'Inativo'}   
        </button>
    </div>
  )
}