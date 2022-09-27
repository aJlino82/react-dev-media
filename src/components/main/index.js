import React from 'react';
import './style.css';


const Main = () => {
    return (
        <div className="main">

            <h1>Escolha seu caminho</h1>
            <br />

            <a className='conteudo'>
                <a className='front' href='/frontend'>Front-end</a>
                <a className='back' href='/backend'>Back-end</a>
            </a>




        </div>
    );

}

export default Main;