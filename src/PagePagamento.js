import { BrowserRouter as Router, Route, Link, useNavigate, useParams } from 'react-router-dom';

import './PagePagamento.css'
import data from './quartos.json'

import Header from './componentes/Header/Header.js'
import Rodape from './componentes/Rodape/Rodape.js';
import CardInfoHotel from './componentes/CardInfoHotel/CardInfoHotel';

import { useEffect, useState } from 'react';
import PaymentForm from './componentes/PaymentForm/PaymentForm.js';
import Quarto from './componentes/Quarto/Quarto.js';
import ConfirmacaoReserva from './componentes/ConfirmacaoReserva/ConfirmacaoReserva.js';
import Botao from './componentes/Botao/Botao.js';

const PagePagamento = () => {


    const { quarto, diarias, entrada, saida } = useParams();

    const [houveErro, setHouveErro] = useState(false);

    const [mostraItensPrePagamento, setMostraItensPrePagamento] = useState(true);

    const [pagamentoConcluido, setPagamentoConcluido] = useState(false);


    const navigate = useNavigate();

    const [nomeHospede, setNomeHospede] = useState('');
    const [cpfHospede, setCpfHospede] = useState('');
    const [emailHospede, setEmailHospede] = useState('');

    const handleNomeHospedeChange = (e) => {
        setNomeHospede(e.target.value)
    }

    const handleCpfHospedeChange = (e) => {
        setCpfHospede(e.target.value)
    }

    const handleEmailHospedeChange = (e) => {
        setEmailHospede(e.target.value)
    }

    useEffect(() => { console.log('uso de use effect') }, [nomeHospede])

    const aoPagar = (e) => {
        e.preventDefault();
        //setNomeHospede = e.target.value
        console.log(nomeHospede)
        console.log(cpfHospede)
        console.log(quarto)
        console.log(entrada)
        console.log(saida)
        console.log(diarias)
        console.log(preco)
        setPagamentoConcluido(true);
        setMostraItensPrePagamento(false);
    }

    useEffect(() => {
        if (houveErro == true) {
            navigate(`/reservas`);
        }
    }, [navigate, houveErro])


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
        setHouveErro(true);
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