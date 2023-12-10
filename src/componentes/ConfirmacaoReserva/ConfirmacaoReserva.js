import { useEffect, useState } from 'react';
import './ConfirmacaoReserva.css'
import TelaConfirmacao from '../TelaConfirmacao/TelaConfirmacao';

const ConfirmacaoReserva = (props) => {


    const gifLoading = `${process.env.PUBLIC_URL}/imagens/carregamento.gif`
    const [loading, setLoading] = useState(true);
    const [confirmou, setConfirmou] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setConfirmou(true)
        }, 3000)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="div-confirmacao-reserva">
            {loading ? <img className='processa-pagamento' src={gifLoading} /> : null}
            {confirmou ? <TelaConfirmacao email={props.email} /> : null} 
        </div>
    )
};
export default ConfirmacaoReserva;