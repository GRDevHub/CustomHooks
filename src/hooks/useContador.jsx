import { useState } from "react"

export const useContador = (valorInicial) => {
    const [contador, setContador] = useState(valorInicial);

    const aumentar = () =>{
        setContador( contador + 1);
    }

    const disminuir = () => {
        setContador(contador - 1);
    }

    return {contador, aumentar, disminuir};
}