import React, { Component } from 'react';
import Example from './Example';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Ukraine'
    };
  }

  handleClick = () => {
    const newCountry = this.state.country === 'Ukraine' ? 'Ukraine is the best country' : 'Ukraine';
    this.setState({ country: newCountry });
  }

  render() {
    return (
      <div>
         <Example country={this.state.country} />
        <button onClick={this.handleClick} className="myBtn">Change country</button>
      </div>
    );
  }
}

export default App;
