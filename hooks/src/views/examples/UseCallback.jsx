import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [contador, setContador] = useState(0)

    const inc = useCallback(function (delta) {
        setContador(curr => curr + delta)
    }, [setContador])

    // function inc(delta) {
    //     setContador(contador + delta)
    // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{contador}</span>

                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
