import './AprInicial.css';
import React from 'react';
import { Link } from 'react-router-dom';


const AprInicial = () => {
    return (
        <section className="fachada-hotel">
            <div className='bloco-reserva'>
                <h2>O hotel mais charmoso da Cidade Maravilhosa</h2>
                <Link to='/reservas'><button className='bt-go-to-reservar'>Faça sua reserva</button></Link>
            </div>
        </section>
    )
};
export default AprInicial;