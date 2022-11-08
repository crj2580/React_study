// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux"

import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

const mapStateToProps = (state) => {
    return { count: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (data) => {
            dispatch(createIncrementAction(data))
        },
        decrement: (data) => {
            dispatch(createDecrementAction(data))
        },
        incrementAsync: (data, time) => {
            dispatch(createIncrementAsyncAction(data, time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
