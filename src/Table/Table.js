import React from "react";

const Table = (props) => {
    console.log(props)
    return (
        <table className="table">
            <thead className="thead-light">
            <tr>
                <th onClick={props.onSort.bind(null, "mark")} scope="col">
                    Марка и модель
                    {props.sortField === 'mark' ? <small>{props.sort}</small> : null}
                </th>
                <th scope="col">Эконом</th>
                <th scope="col">Комфорт</th>
                <th scope="col">Комфорт +</th>
                <th scope="col">Минивен</th>
                <th scope="col">Бизнес</th>
            </tr>
            </thead>
            <tbody>

            {props.data.cars.map(item => (
                <tr key={Math.random()}>
                    <td>{item.mark} {item.model}</td>
                    <td>{item.tariffs['Эконом'] ? item.tariffs['Эконом'].year : '-'}</td>
                    <td>{item.tariffs['Комфорт'] ? item.tariffs['Комфорт'].year : '-'}</td>
                    <td>{item.tariffs['Комфорт+'] ? item.tariffs['Комфорт+'].year : '-'}</td>
                    <td>{item.tariffs['Минивен'] ? item.tariffs['Минивен'].year : '-'}</td>
                    <td>{item.tariffs['Бизнес'] ? item.tariffs['Бизнес'].year : '-'}</td>

                </tr>
            )) }
            </tbody>
        </table>
    )
}

export default Table