import './App.css'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro'; 
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

// export default function (props) {
// export default (props) => {
// export default props => {
export default _ => {

    const el = document.getElementById('root');
    const root = ReactDOM.createRoot(el);

    root.render(<div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13 - Desafio Mega Sena" color="#138809">
                <Mega qtdeNumeros={6}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#5e1a0e">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#65ca65">
                <Input></Input>
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color="#9c6217">
                <IndiretaPai></IndiretaPai>
            </Card>
            
            <Card titulo="#09 - Comunicação Direta" color="#32424b">
                <DiretaPai></DiretaPai>
            </Card>
            
            <Card titulo="#08 - Renderização Condicional" color="#981285">
                <ParOuImpar numero={24}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo></UsuarioInfo>
            </Card>
            
            <Card titulo="#07 - Desafio Produtos" color="rgb(92, 63, 86)">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            

            <Card titulo="#06 - Repetição" color="rgb(73, 7, 59)">
                <ListaAlunos></ListaAlunos>
            </Card>
            
            <Card titulo="#05 - Componente com Filhos" color="rgb(214, 190, 51)">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Maria" />
                    <FamiliaMembro nome="Pedro" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#0f0">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#fa6900">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#00f">
                <ComParametro
                titulo="Situação do Aluno"
                aluno="João"
                nota={9.9}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#f0f">
                <Primeiro></Primeiro>
            </Card>
        </div>      
    </div>);
}