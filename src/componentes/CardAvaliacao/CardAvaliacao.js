import FiveStars from '../FiveStars/FiveStars';
import './CardAvaliacao.css';

const CardAvaliacao = (props) => {
    return (
        <div className='card'>
            <div className='metade-card-cima'>
                <img src={props.imagem} className='foto'></img>
                <p className='guestname'>{props.nome}</p>
            </div>
            <div className='metade-card-baixo'>
                <FiveStars />
                <p className='guestcomment'>"{props.mensagem}"</p>
            </div>
        </div>
    )
};
export default CardAvaliacao;