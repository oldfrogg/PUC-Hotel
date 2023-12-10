import './Botao.css'

const Botao = (props) => {
    return (
        <div className='div-componente-botao'>
        <button className={props.className} onClick={props.onClick}>{props.value}</button>
        </div>
    )
};
export default Botao;