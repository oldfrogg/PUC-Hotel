import './PagePagamento.css'

import data from './quartos.json'

import Header from './componentes/Header/Header.js'
import Rodape from './componentes/Rodape/Rodape.js';
import CardInfoHotel from './componentes/CardInfoHotel/CardInfoHotel';
import PaymentForm from './componentes/PaymentForm/PaymentForm.js';
import Quarto from './componentes/Quarto/Quarto.js';
import ConfirmacaoReserva from './componentes/ConfirmacaoReserva/ConfirmacaoReserva.js';
import Botao from './componentes/Botao/Botao.js';

import { useState } from 'react';
import { useParams } from 'react-router-dom';


const PagePagamento = () => {

    // Definição dos parâmetros
    const { quarto, diarias, entrada, saida } = useParams();

    // Definição dos estados
    const [pagamentoConcluido, setPagamentoConcluido] = useState(false);
    const [nomeHospede, setNomeHospede] = useState('');
    const [cpfHospede, setCpfHospede] = useState('');
    const [emailHospede, setEmailHospede] = useState('');


    // Ganchos para atualização das variáveis de estado
    const handleNomeHospedeChange = (e) => {
        setNomeHospede(e.target.value)
    }
    const handleCpfHospedeChange = (e) => {
        setCpfHospede(e.target.value)
    }
    const handleEmailHospedeChange = (e) => {
        setEmailHospede(e.target.value)
    }
    const aoPagar = (e) => {
        e.preventDefault();
        setPagamentoConcluido(true);
    }


    // Definição do preço, vindos da simulação do back-end
    let preco = 0;

    if (quarto == 'Standard') {
        preco = diarias * data.standard.preco;
    }
    else if (quarto == 'Deluxe') {
        preco = diarias * data.deluxe.preco;
    }
    else if (quarto == 'Presidencial') {
        preco = diarias * data.presidencial.preco;
    }
    else {
        alert('Houve um erro! Retorne e tente novamente!');
    }

    
    return (
        <>
            <Header />
            <CardInfoHotel />
            <div className='quarto-selecionado'>
                <h2>Você selecionou:</h2>
                <Quarto tipoQuarto={quarto} diarias={diarias} />
            </div>
            <div className='dados-reserva'>
                <h2>Dados da Reserva</h2>
                <h3>Entrada: {entrada}</h3>
                <h3>Saída: {saida}</h3>
                <h3>Diárias: {diarias}</h3>
                <h3>Valor total a pagar: R${preco}</h3>
            </div>
            <form className='formulario-pagamento' onSubmit={aoPagar}>
                <h1>Nome do responsável pela reserva</h1>
                <input
                    value={nomeHospede}
                    onChange={handleNomeHospedeChange}
                    type='text'
                    required
                    placeholder='Walter White'
                />

                <h1>CPF do responsável pela reserva</h1>
                <input
                    value={cpfHospede}
                    onChange={handleCpfHospedeChange}
                    required
                    type='tel'
                    maxLength={11}
                    placeholder='12345678900'
                />

                <h1>E-mail para recebimento do voucher</h1>
                <input type="email"
                    value={emailHospede}
                    onChange={handleEmailHospedeChange}
                    required
                    placeholder='walterwhite@hotmail.com' />

                <PaymentForm />
                <Botao value='CONCLUIR RESERVA' type='submit' className='bt-componente bt-pagar'/>
            </form>
            {pagamentoConcluido && <ConfirmacaoReserva email={emailHospede} />}
            <Rodape />
        </>
    )
};
export default PagePagamento;
