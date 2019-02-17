import React, { Component } from 'react';
import { ApiColor } from '../header/Styles';

const API = "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec";

class Api extends Component {
  state = {};

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(json => {
        let {
          main: { temp }
        } = json;
        this.setState({
          weather: (temp - 273.15).toFixed(1)
        });
      });
  }

  render() {
    return (
      <ApiColor>
        Stockholm:  {this.state.weather || '-2'}
      </ApiColor>
    );
  }

}

export default Api;