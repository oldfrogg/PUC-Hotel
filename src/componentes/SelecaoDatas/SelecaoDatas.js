import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import './SelecaoDatas.css'

import { DateRange, DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns'

import { useEffect, useState } from 'react';






const SelecaoDatas = (props) => {


    const alteraData = (item) => {
        props.onChange && props.onChange(item);
        console.log('data alterada')
        //setState([item.selection])
    }

    return (
        <div className='div-selecao-datas'>
            <h2>Selecione a data de entrada e saída</h2>
            <form>
                <DateRange
                    editableDateInputs={false}
                    onChange={alteraData}
                    moveRangeOnFirstSelection={false}
                    ranges={props.ranges}
                    months={2}
                    direction='horizontal'
                    showDateDisplay={false}
                />
            </form>
        </div>
    )
};
export default SelecaoDatas;