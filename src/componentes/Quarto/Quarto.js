
import './Quarto.css'
import data from '../../quartos.json'

const Quarto = (props) => {

    let items = [];
    let preco = 0;
    let foto = '';

    if (props.tipoQuarto === 'Standard') {
        items = data.standard.items || [];
        preco = data.standard.preco || 0;
        foto = `${process.env.PUBLIC_URL}/imagens/suite standard.jpg`
    } else if (props.tipoQuarto === 'Deluxe') {
        items = data.deluxe.items || [];
        preco = data.deluxe.preco || 0;
        foto = `${process.env.PUBLIC_URL}/imagens/suite deluxe.jpg`

    } else if (props.tipoQuarto === 'Presidencial') {
        items = data.presidencial.items || [];
        preco = data.presidencial.preco || 0;
        foto = `${process.env.PUBLIC_URL}/imagens/suite presidencial.jpg`
    }

    return (
        <div className='div-quarto'>
            <div className='suite'>
                <ul>
                    <h3 className="nome-quarto">Suíte {props.tipoQuarto.charAt(0).toUpperCase() + props.tipoQuarto.slice(1)} - R${preco*props.diarias}</h3>
                    {items && items.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
                <img className='foto-quarto' src={foto} />
            </div>
        </div>
    )
};
export default Quarto;