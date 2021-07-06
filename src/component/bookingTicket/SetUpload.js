import React, { Component } from 'react'


export default class SetUpload extends Component {
    renderSeat = () => {
        return this.props.buyTicket.map((item) => {
            return (
                <div className="col-12">
                    <div className="right__left">ghế:{item.tenGhe}</div>
                    <div className="right__right">giá:{item.giaVe.toLocaleString()}vnd</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderSeat()}
            </div>
        )
    }
}
