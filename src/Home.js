import Header from './componentes/Header/Header';
import AprInicial from './componentes/AprInicial/AprInicial';
import AprFotos from './componentes/AprFotos/AprFotos';
import CardAvaliacao from './componentes/CardAvaliacao/CardAvaliacao';
import Rodape from './componentes/Rodape/Rodape';
import CardsAvaliacoes from './componentes/CardsAvaliacoes/CardsAvaliacoes';


const Home = () => {
    return(
        <>
        <Header />
        <AprInicial />
        <AprFotos />
        <CardsAvaliacoes />
        <Rodape />
        </>
    )
};

export default Home;