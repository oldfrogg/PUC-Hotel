/* import DatePicker from 'react-datepicker';

import { useEffect, useState } from 'react';


import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";


const SelecaoData = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const handleSelect = (ranges) => {
        // Atualiza o estado com o novo intervalo de datas selecionado
        setState([ranges.selection]);
    };

    const aoSubmeter = (e) => {
        e.preventDefault();
        console.log(state[0].getDate())
        //console.log(startDate.getMonth()+1)
        //console.log(startDate.getFullYear())
        /*let diaInicial = state[0].startDate;
        let diaFinal = state[0].endDate;
        let diarias = (diaFinal - diaInicial) / 86400000;
        console.log(diarias);
        console.log(diaInicial.getFullYear);
        */
/*    }

    return (
        <>
            <h1>PÁGINA DE RESERVAS</h1>
            <form>
                <DatePicker
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                ranges={state}
                />
                <Link to='/pagamento'><input type='submit' onClick={aoSubmeter} value='BUSCAR'></input></Link>

            </form>

        </>
    )
};
export default SelecaoData;

*/