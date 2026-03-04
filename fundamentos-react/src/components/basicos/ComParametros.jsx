import React from 'react';

export default function ComParametro(params) {
    const sub = params.subtitulo
    return (
        <div>
            <h1>{params.titulo}</h1>
            <h2>{sub}</h2>
            <p> <strong>{params.aluno}</strong> tem nota {params.nota}</p>
        </div>
    );
}