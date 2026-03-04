import React from 'react';
import produtos from '../../data/produtos';

export default props => {
    const thStyle = {
        backgroundColor: '#1f2937',
        color: '#fff',
        textAlign: 'left',
        padding: '10px',
    };

    const tdStyle = {
        padding: '10px',
        borderBottom: '1px solid #e5e7eb',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
    };

    const linhas = produtos.map((produto, index) => (
        <tr
            key={produto.id}
            style={{
                backgroundColor: index % 2 === 0 ? '#f9fafb' : '#ffffff'
            }}
        >
            <td style={tdStyle}>{produto.id}</td>
            <td style={tdStyle}>{produto.nome}</td>
            <td style={tdStyle}>R$ {produto.preco}</td>
        </tr>
    ));

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Nome</th>
                        <th style={thStyle}>Preço</th>
                    </tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>
        </div>
    );
}