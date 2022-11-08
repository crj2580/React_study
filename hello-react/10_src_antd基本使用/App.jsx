import React, { Component } from 'react'
import { Button } from 'antd';
import { WindowsOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"


export default class App extends Component {

  render() {
    return (
      <div>
        app
        <Button type="primary">Primary Button</Button>
        <WindowsOutlined />
      </div>
    )
  }
}
