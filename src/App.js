import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    //  console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
     

    //  console.log('didMount');
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
             const filteredRobots = this.state.robots.filter((robot) => {
               return robot.name
                 .toLowerCase()
                 .includes(this.state.searchField.toLowerCase());
             });
             if (this.state.robots.length === 0) {
               return <h1>Loading...</h1>;
             } else {
               // console.log('render');

               return (
                 <div className="tc">
                   <h1 className="f1">Robo Friends</h1>
                   <SearchBox searchChange={this.onSearchChange} />
                   <CardList robots={filteredRobots} />
                 </div>
               );
             }
           }
}

export default App;
