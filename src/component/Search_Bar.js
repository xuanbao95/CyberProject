import React, { Component } from 'react'
import { connect } from "react-redux"
import * as action from "../redux/action"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button"
import { InsertCommentTwoTone } from '@material-ui/icons';
class Search_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenPhim: "",
            maPhim: '',
            tenHeThongRap: "",
            tenRap: "",
            ngayXem: "",
            gioXem: "",
            maLichChieu: null,
            btnValid: false
        }
    }
    renderTenPhim = () => {
        let { listMovie } = this.props;
        if (listMovie) {
            let arr = listMovie.map((item) => {
                return item.tenPhim;
            });
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        options={arr}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    tenPhim: newValue,
                                    maPhim: '',
                                    tenHeThongRap: "",
                                    tenRap: "",
                                    ngayXem: "",
                                    gioXem: "",
                                    btnValid: true
                                },
                                    () => {
                                        let movie = listMovie.find((item) => {
                                            return item.tenPhim === this.state.tenPhim;
                                        })
                                        this.setState({
                                            maPhim: movie.maPhim,
                                        })
                                        this.props.getActListShowTime(movie.maPhim)
                                    }
                                )
                            }

                        }}
                        renderInput={(params => {
                            return (
                                <TextField
                                    {...params}
                                    id="tenPhim"
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )

                        })}
                    />
                </div>
            )
        }
    }
    renderHeThongRap = () => {
        let { heThongRapChieu } = this.props.listShowTime;
        if (heThongRapChieu) {
            let arr = heThongRapChieu.map((item) => {
                return item.tenHeThongRap;
            })
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.tenHeThongRap}
                        options={arr}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,
                                    tenHeThongRap: newValue,
                                    tenRap: "",
                                    ngayXem: "",
                                    gioXem: "",
                                    btnValid: true
                                })
                            }

                        }}
                        renderInput={(params => {
                            return (
                                <TextField
                                    {...params}
                                    id="tenPhim"
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )

                        })}
                    />
                </div>
            )
        } else {
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.tenHeThongRap}
                        options={["vui lòng chọn phim"]}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({

                                    tenHeThongRap: newValue,
                                    tenRap: "",
                                    ngayXem: "",
                                    gioXem: "",
                                    btnValid: true
                                })
                            }

                        }}
                        renderInput={(params => {
                            return (
                                <TextField
                                    {...params}
                                    id="tenPhim"
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )

                        })}
                    />
                </div>
            )
        }
    }
    renderTenRap = () => {
        let { heThongRapChieu } = this.props.listShowTime;
        let { tenHeThongRap } = this.state;
        if (heThongRapChieu && tenHeThongRap) {

        }
    }
    render() {
        return (
            <div className="search_bar" name="test3">
                {this.renderTenPhim()}
                {this.renderHeThongRap()}
                {this.renderTenRap()}
                {/* {this.renderNgayXem()} */}
                {/* {this.renderGioXem()} */}
                {/* <Button className="buyTicket"
                    variant="contained" color="secondary"
                    disabled={!this.state.btnValid}
                > Mua Vé</Button> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listMovie: state.movieReducer.listMovie,
        listShowTime: state.movieReducer.listMovieShowTime,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getActListShowTime: (idMovie) => {
            dispatch(action.actGetInformationShowTimeAPI(idMovie))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search_Bar);