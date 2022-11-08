import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux"
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 定义UI组件
class Count extends Component {
    // 加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.count}，下方组件总人数为：{this.props.personNum}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;

                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

export default connect(
    state => ({ count: state.sum, personNum: state.person.length }),
    // mapDispatchToProps 的简写
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(Count)
