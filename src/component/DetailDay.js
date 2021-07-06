import React, { Component } from 'react'
import DetailTime from './DetailTime';

export default class DetailDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            day: "",

        }
    }
    openTime = () => {
        if (this.state.isOpen === false) {
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }
    getDay = () => {
        if (this.props.lichChieu) {
            let arr = this.props.lichChieu.filter((item) => {
                return new Date(item.ngayChieuGioChieu).toLocaleDateString() === this.state.day;
            })
            return arr.map((item) => {
                console.log("item", item);
                return <DetailTime time={item} />
            })
        }
    }
    render() {
        let { day } = this.props
        return (
            <div className="day_set">
                <span onClick={() => {
                    this.openTime();
                    this.setState({
                        day: this.props.day
                    })
                }}>
                    ngày: {day}
                    {!this.state.isOpen ? ("") : (<div className="info_day_setup">{this.getDay()}</div>)}
                </span>
            </div>
        )
    }
}
