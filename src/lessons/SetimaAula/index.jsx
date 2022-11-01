import { useState } from 'react'
import './style.scss'

export function SetimaAula() {

    // Tipo diferente de variável que faz o React atualizar a UI qdo ela é mudada
    // [nomeDaVariável, setterDaVariável] = useState(valorInicialDaVariável)
    const [contador, setContador] = useState(0)
    const [temaVermelho, setTemaVermelho] = useState(false)
    
    function somarNumero() {
        setContador(contador + 1)
    }

    function mudarTema() {
        setTemaVermelho(!temaVermelho)
    }

    // Para passar um parâmetro para a função no onClick temos que fazer uma 
    // arrow function que retorna a função + o parâmetro
    // onClick={() => somarNumero(2)}
    return (
        <main className={`setima-aula-component ${temaVermelho ? 'red-theme' : ''}`}>
            <h1>Contador</h1>
            <button onClick={mudarTema}>Mudar tema</button>
            <button onClick={somarNumero}>Adicionar</button>
            <span>Número atual: {contador}</span>
        </main>
    )
}
