import './TelaConfirmacao.css'

const TelaConfirmacao = (props) => {

    const imgReservaConfirmada = `${process.env.PUBLIC_URL}/imagens/reserva confirmada.png`
    const codigoReserva = (Math.floor(Math.random() * 100000000)*Math.floor(Math.random() * 100000000)).toString(16).toUpperCase();

    return (
        <div className='div-reserva-confirmada'>
            <h2 className='titulo-reserva-confirmada'>Agradecemos a preferência!</h2>
            <h2 className='titulo-reserva-confirmada'>Reserva realizada com sucesso!</h2>
            <img className='img-reserva-confirmada' src={imgReservaConfirmada} />
            <h2 className='titulo-reserva-confirmada'>Seu código da reserva:</h2>
            <h2 className='titulo-reserva-confirmada'>{codigoReserva}</h2>
            <h2>Seu voucher logo chegará no e-mail: {props.email}</h2>
        </div>
    )
}
export default TelaConfirmacao;