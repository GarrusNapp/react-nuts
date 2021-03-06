import React, { Component } from 'react';
import './App.css';
import { feature } from 'topojson-client'
import { Svg } from './map.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      paths: "",
      json: ""
    }
  }

  componentDidMount() {
    fetch('new.json')
      .then((response) => {
        return response.json()
      })
      .then((geodata) => {
        const svgPaths = feature(geodata, geodata.objects.subregions).features
        this.setState({
          paths: svgPaths,
          json: geodata
        })
      })
  }

  render() {
    return (
      <div className="App">
          {this.state.paths ? <Svg data={this.state.paths} /> : null}
      </div>
    );
  }
}

export default App;
