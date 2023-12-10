import './FiveStars.css';

const fiveStars = `${process.env.PUBLIC_URL}/imagens/Avaliacao Stars.png`

const FiveStars = () => {
    return(
        <>
        <img src={fiveStars} className='estrelas'/>
        </>
    )
};
export default FiveStars;