import React, { Component } from 'react'
import Child from './child'

export default class Parent extends Component {

    state = {
        hasError: ""
    }

    // 当parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: error }
    }
    
    componentDidCatch() {
        console.log('统计错误次数，反馈给服务器，用于通知编码人员进行bug的解决');
    }

    render() {
        return (
            <div>
                <h2>我是parent组件</h2>
                {this.state.hasError ? <h2>当前网络错误，请稍后再试</h2> : <Child />}
            </div>
        )
    }
}
