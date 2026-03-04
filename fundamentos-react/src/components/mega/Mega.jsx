import React from 'react';
import './Mega.css';

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros || 6,
        numeros: [],
    }

    gerarNumeros = () => {
        const { qtdeNumeros } = this.state;
        const min = 1;
        const max = 60;

        let numerosGerados = [];

        while (numerosGerados.length < qtdeNumeros) {
            const numeroAleatorio = parseInt(Math.random() * (max - min + 1)) + min;

            if (!numerosGerados.includes(numeroAleatorio)) {
                numerosGerados.push(numeroAleatorio);
            }
        }

        numerosGerados.sort((a, b) => a - b);

        this.setState({ numeros: numerosGerados });
    }

    alterarQtde = (e) => {
        let valor = parseInt(e.target.value) || 0;

        if (valor < 6) valor = 6;
        if (valor > 15) valor = 15;

        // this.setState({ qtdeNumeros: valor });
        this.setState({
            qtdeNumeros: valor,
            numeros: []
        });
    }

    render() {
        return (
            <div className='Mega'>
                <h1>Mega-Sena!</h1>

                <div>
                    <label>Quantidade de números (6-15): </label>
                    <input
                        type="number"
                        min="6"
                        max="15"
                        value={this.state.qtdeNumeros}
                        onChange={this.alterarQtde}
                    />
                </div>

                <h3>Números Sorteados:</h3>

                <div className="numerosLinha">
                    {this.state.numeros.join(' - ')}
                </div>

                <button onClick={this.gerarNumeros}>Gerar Números</button>
            </div>
        )
    }
}