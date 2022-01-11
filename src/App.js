import React, { Component } from "react";
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        
        }

    render(){
        const filteredCats = this.state.robots.filter(cat=>{
            return cat.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            
            <div className="tc">
                <h1>Cat Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredCats}/>
            </div>
            
        );
    }
}

export default App;