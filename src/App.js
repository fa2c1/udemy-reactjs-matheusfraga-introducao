import React from 'react';

const Equipe = (props) => {
    return(
        <>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social face={props.facebook} insta={props.instagram}/>
        </>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.face}>Facebook </a>
            <a href={props.insta}>Instagram</a>
        </div>
    );
}

function App(){
    return (
    <div>
        <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Fernando" cargo="Analista de Sistemas" idade="43" facebook="https://www.facebook.com/fa2c1st" instagram="https://www.instagram.com/fa2c1st"/>
        <Equipe nome="Augusto" cargo="Engenheiro de Software" idade="44"facebook="https://www.facebook.com/fa2c1st" instagram="https://www.instagram.com/fa2c1st"/>
    </div>
    );
}

export default App;