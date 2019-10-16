import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import SearchBox from "./components/searchBox/SearchBox.component";
import { CardList } from "./components/cardList/CardList.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }

  searchFunction = input_field_value => {
    this.setState({ searchField: input_field_value });
  };
  monstersFiltered = this.state.monsters;
  render() {
    const { monsters, searchField } = this.state;
    this.monstersFiltered = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodes</h1>
        <SearchBox
          searchFunction={this.searchFunction}
          searchField={this.state.searchField}
        />
        <CardList monsters={this.monstersFiltered} />
      </div>
    );
  }
}

export default App;
