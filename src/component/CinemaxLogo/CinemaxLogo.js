import React, { Component } from 'react'
import * as action from "../redux/action"
import { connect } from "react-redux"
class CinemaxLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listTheater: state.movieReducer.listTheater
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListTheater: () => {
            dispatch(action.actGetListSystemTheaterAPI())
        }
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(CinemaxLogo);