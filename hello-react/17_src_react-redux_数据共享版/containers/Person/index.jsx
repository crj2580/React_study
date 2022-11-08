import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        console.log(personObj);
        this.props.addPer(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是person组件,上方组件的和为：{this.props.sum}</h2>
                <input type="text" placeholder='请输入名字' ref={c => { this.nameNode = c }} />
                <input type="text" placeholder='请输入年龄' ref={c => { this.ageNode = c }} />
                <button onClick={this.addPerson}>添加</button>

                <ul>
                    {
                        this.props.person.map((item) => {
                            return (
                                <li key={item.id}>name:{item.name}--age:{[item.age]}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ person: state.person,sum:state.sum }),
    {
        addPer: createAddPersonAction
    }
)(Person)
