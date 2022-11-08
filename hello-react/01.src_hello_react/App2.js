import React, { Component } from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

export default class App2 extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
