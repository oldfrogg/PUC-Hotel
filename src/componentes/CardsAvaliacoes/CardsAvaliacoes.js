import './CardsAvaliacoes.css';
import CardAvaliacao from '../CardAvaliacao/CardAvaliacao';


const CardsAvaliacoes = () => {
    return (
        <>
            <h2 className='whatguestsays-title'>O que nossos hóspedes dizem?</h2>
            <div className='secao-avaliacoes'>
                <CardAvaliacao imagem='./imagens/Vito.png' nome="Don Vito Corleone" mensagem="É uma estadia que não se pode recusar." />
                <CardAvaliacao imagem='./imagens/Walter.png' nome="Walter White" mensagem="Você quer mesmo viver em um mundo sem o PUC Hotel?" />
                <CardAvaliacao imagem='./imagens/Neo.png' nome="Sr. Anderson" mensagem="Se esse hotel for uma ilusão, eu não quero acordar." />
            </div>
        </>
    )
};
export default CardsAvaliacoes;