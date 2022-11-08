import React, { Component,PureComponent } from 'react'
import "./index.css"

export default class Parent extends PureComponent {
    state = { carName: '奥迪RS7' }

    changeCar = () => {
        this.setState({ carName: "兰博基尼" })
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        // if (this.state.carName === nextState.carName) return false
        // else return true
        return !(this.state.carName === nextState.carName)
    } */

    render() {
        console.log('parent--render');
        const { carName } = this.state
        return (
            <div className='parent'>
                <h3>我是parent组件</h3>
                <span>我的车名字是：{carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName} />
            </div>
        )
    }
}

class Child extends PureComponent {

    /* shouldComponentUpdate(nextProps, nextState) {
        // if (this.props.carName == nextProps.carName) return false
        // else return true
        return !(this.props.carName === nextProps.carName)
    } */

    render() {
        console.log('child--render');
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}