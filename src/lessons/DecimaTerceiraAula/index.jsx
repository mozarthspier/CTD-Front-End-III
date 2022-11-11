import { useState, useEffect } from 'react'
import './style.scss'

export function DecimaTerceiraAula() {

    const [contador, setContador] = useState(0);
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState(false);

    function adicionar() {

        setContador(contador + 1);

    }

    // O segundo parâmetro passado para a função useEffect determina que a função vai ser rodada apenas quando o componente é carregado, não a cada vez que um estado do componente é alterado
    useEffect(() => {

        console.log(userName);
        
        if (userName.length < 10 && userName.length !== 0) {

            setUserNameError(true);

        } else {

            setUserNameError(false);

        }

    }, [userName])

    return (

        <div className="decima-terceira-aula-component">
            <h1>Oi</h1>
            <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
            { userNameError ? <small>O campo Nome precisa conter mais do que 10 caracteres</small> : ""}
            <p>O contador está em {contador}</p>
            <button onClick={() => adicionar()}>Atualizar contador</button>
        </div>

    )

}