import React, {useState} from 'react';
import './input.css';

export default props => {

    const [valor, setValor] = useState('Inicial');

function quandoMudar(e) {
    setValor(e.target.value);
}

    return (
        <div className='Input'>
            <h3>{valor}</h3>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column' 
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    );
}