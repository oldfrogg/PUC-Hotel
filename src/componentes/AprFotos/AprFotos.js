import Carrossel from '../Carrossel/Carrossel';
import './AprFotos.css';

const AprFotos = () => {
    return (
        <section className="apresentacao-hotel">
            <div className="apresentacao-left">
                <p className='descricao'>Uma experiência única em uma localização privilegiada, pensada para a plena satisfação dos nossos hospedes.</p>
                <div className="localizacao">
                    <img src="./imagens/icon-loc.png" />
                    <p>Av. Atlântica, 1802 - Copacabana</p>
                </div>
            </div>
            <div className="apresentacao-right">
                <Carrossel />
            </div>
        </section>
    )
};
export default AprFotos;