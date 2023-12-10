import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import './SelecaoQuartos.css'
import { useEffect, useState } from 'react';
import Quarto from '../Quarto/Quarto';
import Botao from '../Botao/Botao';

const SelecaoQuartos = (props) => {

    const [quartoEscolhido, setQuartoEscolhido] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (quartoEscolhido !== '') {
            navigate(`/pagamento/${quartoEscolhido}/${props.diarias}/${props.entrada}/${props.saida}`)
        }
    }, [navigate, quartoEscolhido])


    const handleClick = (quartoSelecionado) => {
        setQuartoEscolhido(quartoSelecionado);
    }


    return (
        <>
            <div className='lista-de-quartos'>

                <h2 className='titulo-secao-seleciona-quarto'>Selecione o seu quarto - Valores para {props.diarias} diárias</h2>
                <div className='dados-data-escolhida'>
                    <h4>Entrada: {props.entrada}</h4>
                    <h4>Saída: {props.saida}</h4>
                </div>


                <div className="linha-divisoria"></div>

                <div className='componente-quarto-e-bt'>
                    <Quarto tipoQuarto={'Standard'} diarias = {props.diarias} />
                    <Botao onClick={() => handleClick('Standard')} value='RESERVAR' type='submit' className='bt-componente bt-reservar'/>
                </div>

                <div className="linha-divisoria"></div>

                <div className='componente-quarto-e-bt'>
                    <Quarto tipoQuarto={'Deluxe'} diarias = {props.diarias} />
                    <Botao onClick={() => handleClick('Deluxe')} value='RESERVAR' type='submit' className='bt-componente bt-reservar'/>
                </div>


                <div className="linha-divisoria"></div>

                <div className='componente-quarto-e-bt'>
                    <Quarto tipoQuarto={'Presidencial'} diarias = {props.diarias} />
                    <Botao onClick={() => handleClick('Presidencial')} value='RESERVAR' type='submit' className='bt-componente bt-reservar'/>
                </div>

            </div>

        </> 
    )
};
export default SelecaoQuartos;