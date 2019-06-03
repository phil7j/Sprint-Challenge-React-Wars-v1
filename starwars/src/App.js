import React, { Component } from 'react';
import './App.css';
import List from './components/List'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      URL: 'https://swapi.co/api/people/'
    };
  }

  // URL =  () => {
  //   if(this.state.currentPage === 1){
  //   let URL = 'https://swapi.co/api/people/';
  // } else {
  //   URL = `https://swapi.co/api/people/?page=${this.state.currentPage}`
  // } }

  next = (event) => {
    this.setState((prevState) => {

     return {
       currentPage: prevState.currentPage + 1,
       URL: `https://swapi.co/api/people/?page=${this.state.currentPage}` }
    });
  }

  previous = (event) => {
    this.setState((prevState) => {
     if(prevState.currentPage === 1){
      return {currentPage: 1}
     } else
     return {currentPage: prevState.currentPage - 1}
    })
  }

  componentDidMount() {
      this.getCharacters(this.state.URL);
  }

  getCharacters = URL => {

    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

          {/* <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button> */}

        <List data={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
