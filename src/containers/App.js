import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            cats: [],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{this.setState({cats: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        }

    render(){
        const filteredCats = this.state.cats.filter(cat=>{
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            
            <div className="tc">
                <h1 className="f1">CAT FRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList cats={filteredCats}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            
        );
    }
}

export default App;