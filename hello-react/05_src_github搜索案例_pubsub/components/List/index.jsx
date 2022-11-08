import React, { Component } from 'react'
import Pubsub from "pubsub-js"
import './index.css'

export default class List extends Component {

    state = {
        users: [],
        isFrist: true,
        isLoading: false,
        err: ''
    }

    componentDidMount() {
        this.token = Pubsub.subscribe('atguigu', (_, stateObj) => {
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        Pubsub.unsubscribe(this.token)
    }

    render() {
        const { users, isFrist, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFrist ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : isLoading ? <h2>Loading......</h2> : err ? <h2 style={{ color: 'red' }}>err</h2> :
                        users.map((userObj) => {
                            return (
                                <div key={userObj.id} className="card" >
                                    <a href={userObj.html_url} target="_blank" rel='noreferrer'>
                                        <img src={userObj.avatar_url} style={{ width: '100px' }} alt='head_portrait' />
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}
