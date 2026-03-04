import React from 'react';
import Filho from './DiretaFilho';

export default props => {
    return (
        <div>
            <Filho nome="Janderson" idade={20} nerd={true}></Filho>
            <Filho nome="Vitor" idade={40} nerd={false}></Filho>
        </div>
    );
}