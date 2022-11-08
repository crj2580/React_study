import React, { Component } from 'react'
import axios from "axios"
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

  state = {
    users: [],
    isFrist: true,
    isLoading: false,
    err: ''
  }

  updataAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {

    return (
      <div className="container">
        <Search updataAppState={this.updataAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
