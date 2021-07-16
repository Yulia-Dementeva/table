import './App.css';
import _ from 'lodash'
import React, {Component} from "react";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";

class App extends Component {


    state = {
        isLoading: false,
        data: {"cars": [{"mark":"Acura","model":"ILX","tariffs":{"Комфорт":{"year":2015},"Стандарт":{"year":2014}}}]},
        sort: 'asc',
        sortField: 'mark'
    }

    async componentDidMount() {
        const response = await fetch(`https://city-mobil.ru/api/cars`)
        const data = await response.json()
        this.setState({
            isLoading: false,
            data: data
        })
    }

    onSort = (sortField) => {
        console.log(this.state.data.cars)

        const cloneData = this.state.data.cars.concat()
        console.log(cloneData)
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = {cars: _.orderBy(cloneData, sortField, sortType)};

        console.log(orderedData)

        this.setState({
            data: orderedData,
            sort: sortType,
            sortField: sortField
        })

        console.log(this.state.data.cars)
    }

    render() {
        return (
            <div className="App">
                <div className='wrapper'>
                    <header className='header'>
                        <div className='headerTitle'> header</div>
                    </header>
                    <div className='center'>
                        <div className='sidebar'>
                            <div className='sidebarTitle'> sidebar</div>
                        </div>
                        <div className='main'>
                            {this.state.isLoading
                                ? <Loader/>
                                : <Table
                                    data={this.state.data}
                                    onSort={this.onSort}
                                    sort={this.state.sort}
                                    sortField={this.state.sortField}
                                />}
                        </div>
                    </div>
                    <footer className='footer'>
                        <div className='footerTitle'> footer</div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
