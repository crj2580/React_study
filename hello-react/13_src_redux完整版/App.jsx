import React, { Component } from 'react'
import { Button } from 'antd';
import { WindowsOutlined } from "@ant-design/icons"
import Count from './components/Count';


export default class App extends Component {

  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
