
import {useState} from 'react'
import ControleDeContador from './components/ControleDeContador'
//HOOK: Estados = useState()
// useState() é um hook que armazena e atualiza valores dinâmicos na tela
 //conte[variavel, setVariavel] = useState(valorInicial)
export default function App(){
  const[numero, setNumero] = useState(0)
  function aumentar(){
    setNumero(numero + 1)
  }
  return <div>
    <h2>Voce clicou {numero} vezes</h2>
    <button onClick={aumentar}>Clique aqui</button>

    <ControleDeContador />
  </div>
}