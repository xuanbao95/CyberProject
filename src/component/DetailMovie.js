import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../redux/action";
import imgCGV from "../images/img/CineContact/cgv-aeon-binh-tan.jpg";
import imgBHD from "../images/img/CineContact/bhd-star-vincom-quang-trung.jpg";

import imgCineStar from "../images/img/CineContact/ddc-dong-da.jpg";

import imgGalaxy from "../images/img/CineContact/galaxy-huynh-tan-phat.jpg";

import imgLotteCinema from "../images/img/CineContact/lotte-cinema-go-vap.jpg";

import imgMegas from "../images/img/CineContact/mega-gs-cao-thang.jpg";
import Axios from "axios";
import { Dialog } from "@material-ui/core";
import Dialog1 from "./Dialog"
import DetailDay from "./DetailDay";
import { withRouter } from "react-router"
import HeaderComponent from "./header";
class DetailMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idListTheaterMovie: [],
            listTheaterMovie: [],
            listTheaterRender: [],
            idTheaterMovie: null,
            theater: {},
            isOpen: false,
            img: imgCGV,
            maLichChieu: null,
            day: ""
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        //lấy id từ địa chỉ http
        this.props.getDetailMovie(id);
        Axios({
            method: "GET",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        })
            .then((rs) => {
                this.setState({
                    listTheaterMovie: rs.data,
                });
            })
            .catch();
    }
    openDay = () => {
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.detailMovie) {
            if (nextProps.detailMovie.lichChieu) {
                let idListTheater = nextProps.detailMovie.lichChieu.map((item) => {
                    return item.thongTinRap.maHeThongRap;
                });

                let arrFilter = idListTheater.filter((item, index) =>
                    //filter dùng để lọc giá trị trong mãng và để sử dụng lại giá trị đó phải . tới indexOf(item)
                    idListTheater.indexOf(item) === index
                );
                let arr = [];
                for (const id of arrFilter) {
                    let theater = this.state.listTheaterMovie.find((item) => {
                        return item.maHeThongRap === id;
                    })
                    arr.push(theater)
                }
                let arr1 = nextProps.detailMovie.lichChieu.map((item) => {
                    return item.maLichChieu;
                })
                this.setState({
                    listTheaterRender: arr,
                    maLichChieu: arr1[0]
                })
            }
        }
    }
    renderIMG = () => {
        if (this.state.idTheaterMovie) {
            let imtUpdate = null;
            switch (this.state.idTheaterMovie) {
                case "BHDStar":
                    imtUpdate = imgBHD;
                    break;
                case "CGV":
                    imtUpdate = imgCGV;
                    break;
                case "CineStar":
                    imtUpdate = imgCineStar;
                    break;
                case "Galaxy":
                    imtUpdate = imgCineStar;
                    break;
                case "LotteCinima":
                    imtUpdate = imgLotteCinema;
                    break;
                case "MegaGS":
                    imtUpdate = imgMegas;
                    break;

                default:
                    break;
            }
            this.setState({ img: imtUpdate });
        }
    };
    handleOnChangeId = (idTheater) => {
        if (this.props.detailMovie) {
            let arrayTheater = this.props.detailMovie.lichChieu.filter((theater) => {
                return theater.thongTinRap.maHeThongRap === idTheater;
            });
            this.setState(
                {
                    theater: arrayTheater[0],
                    idTheaterMovie: idTheater,
                },
                () => {
                    this.renderIMG();
                }
            );
        }
    };

    renderLogo = () => {
        if (this.state.listTheaterRender.length > 0) {
            return this.state.listTheaterRender.map((theater, index) => {
                return (
                    <a
                        onClick={() => {
                            this.handleOnChangeId(theater.maHeThongRap);
                        }}
                        key={index}
                        className="nav-link active"
                        id="v-pills-CGV-tab"
                        data-toggle="pill"
                        href="#v-pills-CGV"
                        role="tab"
                        aria-controls="v-pills-CGV"
                        aria-selected="true"

                    >
                        <img src={theater.logo} />
                    </a>
                );
            });
        }
    };
    renderTheater = () => {
        if (this.state.theater.thongTinRap) {
            return (
                <div className="info__items">
                    <p>
                        <a
                            data-toggle="collapse"
                            href="#VincomGV"
                            role="button"
                            aria-expanded="false"
                            aria-controls="VincomGV"
                        ></a>
                    </p>
                    <div className="info__cinema active">
                        <a
                            data-toggle="collapse"
                            href="#VincomGV"
                            role="button"
                            aria-expanded="false"
                            aria-controls="VincomGV"
                        >
                            <div className="info__picture" onClick={this.openDay}>
                                <img src={this.state.img} alt="CGV" />
                            </div>
                        </a>
                        <div className="info__text">
                            <a
                                data-toggle="collapse"
                                href="#VincomGV"
                                role="button"
                                aria-expanded="false"
                                aria-controls="VincomGV"
                            >
                                <p className="info__nameMovieCinema">
                                    <span className="info__colorCinema">
                                        {this.state.theater.thongTinRap.maHeThongRap}
                                    </span>{" "}
                                    - {this.state.theater.thongTinRap.tenCumRap}
                                </p>
                                <p className="info__infoMovieCinema">
                                    Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, Phường 7,
                                    Quận Gò Vấp
                                </p>
                            </a>
                            <p className="info__showingDetailCinema">
                                <a
                                    data-toggle="collapse"
                                    href="#VincomGV"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="VincomGV"
                                />
                                <a href="#">[chi tiết]</a>
                            </p>
                        </div>
                        {!this.state.isOpen ? (
                            ""
                        ) : (
                            <div>
                                <br />
                                <div className="info_day">{this.renderDay()}</div>
                            </div>
                        )}
                    </div>
                    <p />
                </div>
            );
        }
    }

    renderDay = () => {
        let { detailMovie } = this.props;
        if (detailMovie.lichChieu) {
            let listDay = detailMovie.lichChieu.map((item) => {
                return new Date(item.ngayChieuGioChieu).toLocaleDateString();
            });
            let arrDayFilter = listDay.filter((item, index) => {
                return listDay.indexOf(item) === index;
            })
            return arrDayFilter.map((item) => {
                return (
                    <DetailDay day={item} lichChieu={this.props.detailMovie.lichChieu} />
                )
            })
            // let listDayUpdate = [...listDay]
            // return (
            //     <div>
            //         <p>{listDayUpdate}</p>
            //     </div>

            // )
        }

    }
    changePage = () => {
        if (JSON.parse(localStorage.getItem("user")) === null) {
            this.props.history.push("/form");
        } else {
            if (this.state.maLichChieu) {
                this.props.history.push(`/booking/${this.state.maLichChieu}`)
            }
        }
    }
    renderAll = () => {
        let { detailMovie } = this.props;
        let moment = require("moment")
        console.log(detailMovie);
        return (
            <div className="background-detail">
                <div className="name__content">
                    <div className="name__background">
                        <div className="name__picture">
                            <img src={detailMovie.hinhAnh} />
                        </div>
                        <HeaderComponent></HeaderComponent>
                        <div className="name__overlay"></div>
                        <div className="view">
                            <div className="row">
                                <div className="col-3">
                                    <img className="image" src={detailMovie.hinhAnh} alt="" />
                                    <Dialog1 trailer={detailMovie.trailer} />
                                </div>
                                <div className="col-5">
                                    <p className="day">
                                        {moment(detailMovie.ngayKhoiChieu).format("HH:MM:A")}
                                    </p>
                                    <span className="c18">C18</span>
                                    <span className="name_movie">{detailMovie.tenPhim}</span>
                                    <div className="buy-ticket_De">
                                        <button
                                            onClick={this.changePage}
                                            className="btn_buy_ticket"
                                        >
                                            Mua vé
                                        </button>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="name__circlePercent c100 p65">
                                        <div className="name__circleBorder"></div>
                                        <span className="name__number">6.5</span>
                                        <div className="slice">
                                            <div className="bar haftCircle"></div>
                                            <div className="fill haftCircle"></div>
                                        </div>
                                    </div>
                                    <div className="start">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info__content" name="test5">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                id="pills-home-tab"
                                data-toggle="pill"
                                href="#pills-home"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                Thông Tin{" "}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="pills-calendar-tab"
                                data-toggle="pill"
                                href="#pills-calendar"
                                role="tab"
                                aria-controls="pills-calendar"
                                aria-selected="false"
                            >
                                Lịch Chiếu
                            </a>
                        </li>
                    </ul>
                    <div className="tab_content" id="pills-tabContent" >
                        <div
                            class="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                        >
                            <div className="row info__row1">
                                <div className="col-md-6 col-sm-12 hello">
                                    <div className="info">
                                        <p className="info__contentTitle">Ngày phát hành</p>
                                        <p className="info__contentInfo">

                                        </p>
                                    </div>
                                    <div className="info">
                                        <p className="info__contentTitle">Đạo diễn</p>
                                        <p className="info__contentInfo">Dave Wilson</p>
                                    </div>
                                    <div className="info">
                                        <p className="info__contentTitle">Diễn viên</p>
                                        <p className="info__contentInfo">
                                            Toby Kebbell, Eiza González, Vin Diesel
                                        </p>
                                    </div>
                                    <div className="info">
                                        <p className="info__contentTitle">Thể loại</p>
                                        <p className="info__contentInfo">hành động</p>
                                    </div>
                                    <div className="info">
                                        <p className="info__contentTitle">Định dạng</p>
                                        <p className="info__contentInfo">2D/Digital</p>
                                    </div>
                                    <div className="info">
                                        <p className="info__contentTitle">Quốc Giá SX</p>
                                        <p className="info__contentInfo">Mỹ</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 info__colRight">
                                    <p className="info__contentTitle">Nội dung</p>
                                    <p className="info__contentInfo">{detailMovie.moTa}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                        >
                            <div className="infoShowReview">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="info__inputReview" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-calendar"
                            role="tabpanel"
                            aria-labelledby="pills-calendar-tab"
                        >
                            <div className="info__calendar">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="parentListPCinemas">
                                            <div
                                                className="nav flex-column nav-pills"
                                                id="v-pills-tab"
                                                role="tablist"
                                                aria-orientation="vertical"
                                            >
                                                {this.renderLogo()}
                                            </div>
                                        </div>
                                        <div className="listCinemas">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="v-pills-CGV"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-CGV-tab"
                                                >
                                                    <div className="info__scope">
                                                        <ul
                                                            className="nav nav-pills mb-3 navLeft"
                                                            id="pills-tab"
                                                            role="tablist"
                                                        >
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link active"
                                                                    id="pills-monday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-monday"
                                                                    role="tab"
                                                                    aria-controls="pills-monday"
                                                                    aria-selected="true"
                                                                >
                                                                    Thứ 2
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    id="pills-tuesday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-tuesday"
                                                                    role="tab"
                                                                    aria-controls="pills-tuesday"
                                                                    aria-selected="false"
                                                                >
                                                                    Thứ 3
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    id="pills-wednesday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-wednesday"
                                                                    role="tab"
                                                                    aria-controls="pills-wednesday"
                                                                    aria-selected="false"
                                                                >
                                                                    Thứ 4
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    id="pills-thursday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-thursday"
                                                                    role="tab"
                                                                    aria-controls="pills-thursday"
                                                                    aria-selected="false"
                                                                >
                                                                    Thứ 5
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    id="pills-friday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-friday"
                                                                    role="tab"
                                                                    aria-controls="pills-friday"
                                                                    aria-selected="false"
                                                                >
                                                                    Thứ 6
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    id="pills-saturday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-saturday"
                                                                    role="tab"
                                                                    aria-controls="pills-saturday"
                                                                    aria-selected="false"
                                                                >
                                                                    Thứ 7
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    id="pills-sunday-tab"
                                                                    data-toggle="pill"
                                                                    href="#pills-sunday"
                                                                    role="tab"
                                                                    aria-controls="pills-sunday"
                                                                    aria-selected="false"
                                                                >
                                                                    Chủ nhật
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div
                                                            className="tab-content selectScroll"
                                                            id="pills-tabContent"
                                                        >
                                                            <div
                                                                className="tab-pane fade show active"
                                                                id="pills-monday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-monday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="pills-tuesday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-tuesday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="pills-wednesday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-wednesday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="pills-thursday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-thursday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="pills-friday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-friday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="pills-saturday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-saturday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="pills-sunday"
                                                                role="tabpanel"
                                                                aria-labelledby="pills-sunday-tab"
                                                            >
                                                                {this.renderTheater()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
    render() {
        return <div>
            {this.renderAll()}
        </div>;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovie: (id) => {
            dispatch(action.actGetDetailMovieAPI(id));
        },
    };
};

const mapStateToProps = (state) => {
    return {
        detailMovie: state.movieReducer.listDetail,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailMovie));