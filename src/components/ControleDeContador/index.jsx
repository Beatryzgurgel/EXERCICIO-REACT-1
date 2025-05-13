import{useState} from'react'
export default function ControleDeContator(){
    const [numero, setNumero] = useState(0)

    function aumentar (){
        setNumero(numero + 1)
    }
  
    function diminuir (){
        if(numero>0){
            setNumero(numero - 1)
        }
    }


    return(
        <div>
            <h2>Clicou {numero} vezes</h2>
            <button onClick={aumentar}>+</button>
            <button onClick={diminuir}>-</button>
        </div>
    )

}