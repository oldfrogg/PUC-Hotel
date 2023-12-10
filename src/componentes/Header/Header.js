import './Header.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

    const logoHotel = `${process.env.PUBLIC_URL}/imagens/Logo Hotel.png`;

    return (
        <>
            <nav>
                <div className='divhome'>
                <Link to='/'><img src={logoHotel} /></Link>
                    <Link to='/'><button>PUC HOTEL</button></Link>
                </div>
                <div className='linksnav'>
                    <button>GALERIA</button>
                    <button>SOBRE</button>
                    <button>CONTATO</button>
                    <Link to='/reservas'><button className='btReservarNav'>RESERVAR</button></Link>
                </div>
            </nav>
        </>
    )
};
export default Header;