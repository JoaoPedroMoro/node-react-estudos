import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [contador, setContador] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{contador}</span>
                <div>
                    <button className="btn" onClick={() => setContador(contador - 1)}>
                        -1
                    </button>
                    <button className="btn" onClick={() => setContador(contador + 1)}>
                        +1
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
        </div>
    )
}

export default UseState
