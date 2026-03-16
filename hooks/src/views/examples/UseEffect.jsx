import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    const num = parseInt(n)
    if (num < 0) return -1
    if (num === 0) return 1
    return calcFatorial(num - 1) * num
}

const UseEffect = (props) => {

    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [num2, setNum2] = useState(0)
    const [status, setStatus] = useState("Par")

    useEffect(function () {
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(function () {
        setStatus(num2 % 2 === 0 ? "Par" : "Ímpar")
    }, [num2])

    useEffect(function () {
        if (fatorial > 1000) {
            document.title = "Eita!!!"
        } else {
            document.title = "React App"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe!" : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={num}
                    onChange={e => setNum(Number(e.target.value))} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input"
                    value={num2}
                    onChange={e => setNum2(Number(e.target.value))} />
            </div>

        </div>
    )
}

export default UseEffect
