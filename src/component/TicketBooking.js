import React, { Component } from "react";
import HeaderBooking from "./bookingTicket/HeaderBooking";
import * as action from "../redux/action";
import { connect } from "react-redux";
import BookingInfo from "./bookingTicket/BookingInfo";
import ListChair from "./bookingTicket/ListChair";
import BuyTicket from "./bookingTicket/BuyTicket";
class TicketBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listChair: [],
        };
    }
    timVitri = (maGhe) => {
        return this.state.listChair.findIndex(
            (products) => products.maGhe === maGhe
        );
    };

    handleAddCart = (product, isBooking) => {
        let index = this.timVitri(product.maGhe);
        let listChairUpdate = [...this.state.listChair];

        if (!isBooking) {
            listChairUpdate = [...this.state.listChair, product];
        } else {
            listChairUpdate.splice(index, 1);
        }
        this.setState({
            listChair: listChairUpdate,
        });
    };
    render() {
        return (
            <div>
                <HeaderBooking />
                <div className="seatCheckOut">
                    <div className="seatCheckOut__content">
                        <BookingInfo FilmInfo={this.props.listChair.thongTinPhim} />
                        <div class="clear"></div>
                        <ListChair addTicket={this.handleAddCart} />
                    </div>
                </div>
                <BuyTicket buyTicket={this.state.listChair}
                    FilmInfo={this.props.listChair.thongTinPhim}
                    listChair={this.state.listChair}
                />
            </div>
        );
    }
    componentDidMount() {
        let idMaLichChieu = this.props.match.params.idLichChieu;
        this.props.getListChairMovie(idMaLichChieu);

    }
    componentWillUnmount() {
        localStorage.removeItem("maLichChieu");
        this.props.resetListChairBooking()
    }
}

const mapDispatchToProps = (dispatch) => {
    // console.log("fdadf");
    return {
        getListChairMovie: (IDmaLichChieu) => {
            dispatch(action.actGetListBookingAPI(IDmaLichChieu));
            console.log(IDmaLichChieu);
        },
        resetListChairBooking: () => {
            dispatch(action.actGetListChairBooking([]));
        },
    };
};

const mapStateToProps = (state) => {
    console.log(state.movieReducer);
    return {
        listChair: state.movieReducer.listChair,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);