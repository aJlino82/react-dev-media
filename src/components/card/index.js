import { useState } from 'react';
import './style.css';

export default function Card() {

    const text1 = "Olá";
    const text2 = "Foda-se!";

    const [novoTexto, setNovotexto] = useState(true);

    const alteraTexto = () => {
        setNovotexto(!novoTexto);
    };



    return (
        <div className="card-container">

            <h2 >Altere o Texto</h2>
            <div
                className={novoTexto ? text1 : text2}>
            </div>

            <div className="area-botao">
                <label>Clique no botão para gerar um texto</label>
                <br /><br />
                <button className='btn' onClick={alteraTexto}>
                    Alterar Text!
                </button>
            </div>

        </div>
    );
}
