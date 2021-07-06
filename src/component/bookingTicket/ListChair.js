import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";
import screen from "../../images/img/screen.png";
class ListChair extends Component {
    renderListChair = () => {
        if (this.props.listChair.danhSachGhe) {
            if (this.props.listChair.danhSachGhe.length > 0) {
                return this.props.listChair.danhSachGhe.map((item) => {
                    return (
                        <Chair
                            item={item}
                            key={item.maGhe}
                            addTicket={this.props.addTicket}
                        />
                    );
                });
            }
        }
    };

    render() {
        return (
            <div>
                <div class="seatCheckOut__seatMap">
                    <div class="seatCheckOut__screen">
                        <img src={screen} alt="" />
                    </div>
                    <div className="col-8 seatCheckOut__listSeat col-8-chair">
                        <div className="numberofchair" style={{ position: "absolute" }}>
                            <p className="lala">A</p>
                            <p className="lala">B</p>
                            <p className="lala">C</p>
                            <p className="lala">D</p>
                            <p className="lala">E</p>
                            <p className="lala">F</p>
                            <p className="lala">G</p>
                            <p className="lala">H</p>
                            <p className="lala">I</p>
                            <p className="lala">J</p>
                        </div>
                        {this.renderListChair()}
                    </div>
                    <div class="seatCheckOut__noteSeat">
                        <div class="seatCheckOut__typeSeats">
                            <span class="seatCheckOut__colorNotChosen seatCheckOut__typeSeat Seat1">
                                <span class="color"></span>
                                <span class="nameSeat">Ghế có thể chọn</span>
                            </span>
                            <span class="seatCheckOut__colorNotChosenVip seatCheckOut__typeSeat Seat3">
                                <span class="color"></span>
                                <span class="nameSeat">Ghế Vip</span>
                            </span>
                            <span class="seatCheckOut__colorChoosing seatCheckOut__typeSeat">
                                <span class="color"></span>
                                <span class="nameSeat">Ghế đang chọn</span>
                            </span>
                            <span class="seatCheckOut__colorChosen seatCheckOut__typeSeat Seat2">
                                <span class="color"></span>
                                <span class="nameSeat">Ghế đã có người chọn</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.movieReducer.listChair);
    return {
        listChair: state.movieReducer.listChair,
    };
};

export default connect(mapStateToProps, null)(ListChair);