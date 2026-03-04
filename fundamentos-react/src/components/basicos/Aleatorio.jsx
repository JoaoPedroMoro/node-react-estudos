import React from 'react';

export default props => {
    const {min, max} = props
    const valor = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <div>
            <h2>Gerador de valor Aleatório!</h2>
            <p>
                <strong>Valor máximo: </strong>{props.max}
            </p>
            <p>
                <strong>Valor mínimo: </strong>{props.min}
            </p>
            <p>
                <strong>Valor sorteado: </strong>{valor}
            </p>
        </div>
    );
}