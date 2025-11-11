import './App.css'
import { useState } from 'react'
import { AddProdutos } from './components/addProdutos'
import { ListProdutosV2 } from './components/listProdutos-v2'

function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  return (
    <>
      <AddProdutos />
      <input type="text" 
          style={{ padding: '10px', borderRadius: '7px', border: '0px',
             marginRight: '20px' }}
          value={nome} 
          onChange={ e => setNome(e.target.value) }
      />
      
      <input type="number" 
          style={{ padding: '10px', borderRadius: '7px', border: '0px' }}
          value={idade} 
          onChange={ e => setIdade( Number(e.target.value) ) }
      />
      
      <p>Nome: {nome} - Idade: {idade}</p>

      <ListProdutosV2 
         produtos={[
          { nome: "Camisa 1", preco: 200 },
          { nome: "Camisa 2", preco: 240 },
        ]}
      />
    </>
  )
}

export default App
