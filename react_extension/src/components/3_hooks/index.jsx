import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/* export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
} */

function Demo() {
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(() => {
        console.log('@');

        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount(count => count + 1)
    }

    function show() {
        alert(myRef.current.value)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo
