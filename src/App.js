import './App.css';
import React, {Component} from "react";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";

class App extends Component {


    state = {
        isLoading: false,
        data: {"cars": [{"mark":"Acura","model":"ILX","tariffs":{"Комфорт":{"year":2015},"Стандарт":{"year":2014}}}]}
    }

    async componentDidMount() {
        const response = await fetch(`https://city-mobil.ru/api/cars`)
        const data = await response.json()
        this.setState({
            isLoading: false,
            data: data
        })
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
                                    cars={this.state.data.cars}
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
