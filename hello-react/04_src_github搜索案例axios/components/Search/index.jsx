import React, { Component } from 'react'
import axios from "axios"

export default class Search extends Component {

    search = () => {
        const { keyWordElement: { value: keyWord } } = this
        this.props.updataAppState({ isFrist: false, isLoading: true })

        axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
            response => {
                this.props.updataAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                this.props.updataAppState({ isLoading: false, err: error.message })
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={current => this.keyWordElement = current} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
