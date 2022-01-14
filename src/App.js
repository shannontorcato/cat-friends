import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        }

    render(){
        const filteredCats = this.state.robots.filter(cat=>{
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            
            <div className="tc">
                <h1 className="f1">CAT FRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredCats}/>
                </Scroll>
            </div>
            
        );
    }
}

export default App;