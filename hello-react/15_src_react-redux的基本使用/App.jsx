import React, { Component } from 'react'
import { Button } from 'antd';
import { WindowsOutlined } from "@ant-design/icons"
import Count from './containers/Count';
import store from './redux/store';


export default class App extends Component {

  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    )
  }
}
