import { useState, useEffect } from "react";


const [fornecedores,setFornecedores] = useState([]);
const url = 'http://localhost:3000/fornecedores';



useEffect(() => {
    fetch(url)
    .then(response  => response.json())
    .then(data => {
      setFornecedores(data)  
      console.log(data) 
    })
}, [])



export default Mtable