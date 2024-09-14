import { useState } from "react"

export const useContador = (valorInicial) => {
    const [contador, setContador] = useState(valorInicial);

    const aumentar = () =>{
        setContador( contador + 1);
    }

    const disminuir = () => {
        if(contador > 0){
            setContador(contador - 1);
        }else{
            alert('Debe ser mayor a 0');
        }
    }

    return {contador, aumentar, disminuir};
}