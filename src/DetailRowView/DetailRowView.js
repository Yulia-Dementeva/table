import React from 'react';
import './DetailRowView.css'

const DetailRowView = (props) => {
    return (
    <div>
        <p className='carInfo'>Выбран автомобиль {props.car.mark} {props.car.model} 2005 года выпуска
        </p>
    </div>
    )
}

export default DetailRowView