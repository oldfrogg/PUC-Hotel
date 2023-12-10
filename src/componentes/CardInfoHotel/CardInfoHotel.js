import './CardInfoHotel.css';
import FiveStars from '../FiveStars/FiveStars';

const CardInfoHotel = () =>{
    return(
        <div className='div-card-info-hotel'>
            <div className='textos-card-info-hotel'>
            <h4>PUC Hotel RJ</h4>
            <p>Av. Atlântica, 1802 - Copacabana</p>
            </div>
            <FiveStars />
        </div>
    )
};
export default CardInfoHotel;