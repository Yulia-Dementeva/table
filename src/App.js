import './App.css';
import _ from 'lodash'
import React, {Component} from "react";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import DetailRowView from "./DetailRowView/DetailRowView";
import TableSearch from "./TableSearch/TableSearch";

class App extends Component {

    state = {
        isLoading: true,
        data: {
            "cars": [{
                "mark": "Acura",
                "model": "ILX",
                "tariffs": {"Комфорт": {"year": 2015}, "Стандарт": {"year": 2014}}
            }]
        },
        sort: 'asc',
        sortField:'mark',
        row: null,
        search: null
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
        const cloneData = this.state.data.cars.concat()
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = {cars: _.orderBy(cloneData, sortField, sortType)};
        this.setState({
            data: orderedData,
            sort: sortType,
            sortField: sortField
        })
    }

    onRowSelect = row => (
        this.setState({row})
    )

    searchHandler = (search) => {
        this.setState({search})
    }

    getFilteredData() {
        const {data, search} = this.state

        if (!search) {
            return data
        }

        let result = data.cars.filter(item => {

            return (
                item["mark"].toLowerCase().includes(search.toLowerCase()) ||
                item["model"].toLowerCase().includes(search.toLowerCase()) ||
                (item["mark"] + ' ' + item["model"]).toLowerCase().includes(search.toLowerCase())
            );
        });
        if (result.length) {
            result = {cars: result}
        }

        if (result.length === 0) {
            result = {cars: result}
        }

        return result
    }


    render() {
        const filteredData = this.getFilteredData();

        return (
            <div className="App">
                <div className='wrapper'>

                    <div className='header'>
                        <div className='headerTitle'> header</div>
                    </div>

                    <main className='main'>
                        <div className='sidebar'>
                            <div className='sidebarTitle'> sidebar</div>
                        </div>
                        <div className='center'>
                            {this.state.isLoading
                                ? <Loader/>
                                : <React.Fragment>
                                    <TableSearch onSearch={this.searchHandler}/>
                                    <Table

                                        data={filteredData}
                                        onSort={this.onSort}
                                        sort={this.state.sort}
                                        sortField={this.state.sortField}
                                        onRowSelect={this.onRowSelect}
                                    />
                                </React.Fragment>
                            }
                            {this.state.row ? <DetailRowView car={this.state.row}/> : null}
                        </div>
                    </main>

                    <footer className='footer'>
                        <div className='footerTitle'> footer</div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
