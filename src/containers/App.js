import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import "./App.css";
import Scroll from '../components/Scroll';

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
             return !this.state.robots.length ?
                <h1>Loading...</h1>:
        
               // console.log('render');

                (
                 <div className="tc">
                   <h1 className="f1">Robo Friends</h1>
                   <SearchBox searchChange={this.onSearchChange} />
                   <Scroll>
                     <CardList robots={filteredRobots} />
                   </Scroll>
                 </div>
               );
            
           }
}

export default App;
