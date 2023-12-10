import Botao from './componentes/Botao/Botao';
import CardInfoHotel from './componentes/CardInfoHotel/CardInfoHotel';
import Header from './componentes/Header/Header';
import Rodape from './componentes/Rodape/Rodape';
import SelecaoDatas from "./componentes/SelecaoDatas/SelecaoDatas";
import SelecaoQuartos from './componentes/SelecaoQuartos/SelecaoQuartos';
import { useEffect, useState } from 'react';


const PageReservas = () => {

    const [diarias, setDiarias] = useState(0);
    const [diaInicial, setDiaInicial] = useState(0);
    const [mesInicial, setMesInicial] = useState(0);
    const [anoInicial, setAnoInicial] = useState(0);
    const [diaFinal, setDiaFinal] = useState(0);
    const [mesFinal, setMesFinal] = useState(0);
    const [anoFinal, setAnoFinal] = useState(0);

    const handleSelect = (ranges) => {
        // Atualiza o estado com o novo intervalo de datas selecionado
        setState([ranges.selection]);
    };

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [mostraQuartos, setMostraQuartos] = useState(false);

    const aoClicar = (e) => {
        e.preventDefault();
        setDiaInicial(state[0].startDate.getDate());
        setMesInicial(state[0].startDate.getMonth() + 1);
        setAnoInicial(state[0].startDate.getFullYear());
        setDiaFinal(state[0].endDate.getDate());
        setMesFinal(state[0].endDate.getMonth() + 1);
        setAnoFinal(state[0].endDate.getFullYear());
        setDiarias((state[0].endDate - state[0].startDate) / 86400000);
        setMostraQuartos(true);
    }

    useEffect(() => {
        setEntrada(`${diaInicial}-${mesInicial}-${anoInicial}`);
        setSaida(`${diaFinal}-${mesFinal}-${anoFinal}`);
      }, [diarias, diaInicial, mesInicial, anoInicial, diaFinal, mesFinal, anoFinal]);

    const [entrada, setEntrada] = useState('');
    const [saida, setSaida] = useState('');

    return (
        <>
            <Header />
            <CardInfoHotel />
            <SelecaoDatas ranges={state} onChange={handleSelect} />
            <Botao onClick={aoClicar} value='PESQUISAR' type='submit' className='bt-componente'/>
            {mostraQuartos && <SelecaoQuartos diarias={diarias} entrada={entrada} saida={saida} />}            
            <Rodape />
        </>
    )
};
export default PageReservas;