import React from "react";

const Table = (props) => {
    console.log(props)
    return (
        <table className="table">
            <thead className="thead-light">
            <tr>
                <th scope="col">Марка и модель (*)</th>
                <th scope="col">Эконом</th>
                <th scope="col">Комфорт</th>
                <th scope="col">Комфорт +</th>
                <th scope="col">Минивен</th>
                <th scope="col">Бизнес</th>
            </tr>
            </thead>
            <tbody>

            { props.cars.map(item => (
                <tr key={Date.now() * 1000}>
                    <td>{item.mark}</td>
                    <td>{item.tariffs['Эконом'] ? item.tariffs['Эконом'].year : '-'}</td>
                    <td>{item.tariffs['Комфорт'] ? item.tariffs['Комфорт'].year : '-'}</td>
                    <td>{item.tariffs['Комфорт+'] ? item.tariffs['Комфорт+'].year : '-'}</td>
                    <td>{item.tariffs['Минивен'] ? item.tariffs['Минивен'].year : '-'}</td>
                    <td>{item.tariffs['Бизнес'] ? item.tariffs['Бизнес'].year : '-'}</td>

                </tr>
            )) }



            {/*<tr>*/}
            {/*    <th scope="row">1</th>*/}
            {/*    <td>Mark</td>*/}
            {/*    <td>Otto</td>*/}
            {/*    <td>@mdo</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <th scope="row">2</th>*/}
            {/*    <td>Jacob</td>*/}
            {/*    <td>Thornton</td>*/}
            {/*    <td>@fat</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <th scope="row">3</th>*/}
            {/*    <td>Larry</td>*/}
            {/*    <td>the Bird</td>*/}
            {/*    <td>@twitter</td>*/}
            {/*</tr>*/}
            </tbody>
        </table>
    )
}

export default Table