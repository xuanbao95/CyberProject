import React, { Component } from 'react'
import * as action from "../redux/action"
import { connect } from "react-redux"
class Cinema extends Component {

    render() {

        return (
            <div>
                <div name="test4">
                    <section className="homeMovies" id="cinemaBlock">
                        <div className="homeMovies__content">
                            <div className="homeMovies__bg">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="parentListPCinemas col-sm-12">
                                            <div
                                                className="nav flex-column nav-pills"
                                                id="v-pills-tab"
                                                role="tablist"
                                                aria-orientation="vertical"
                                            >

                                            </div>
                                        </div>
                                        <div className="listCinemas col-sm-12">
                                            <div
                                                className="tab-content selectScroll"
                                                id="v-pills-tabContent"
                                            >
                                                {/* <CinemaTheater /> */}
                                            </div>
                                        </div>
                                        <div className="listMovies col-sm-12">
                                            <div className="homeMovies__contentCinema">
                                                <div
                                                    className="tab-content selectScroll"
                                                    id="v-pills-tabContent"
                                                >
                                                    {/* <CinemaMovie /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Cinema)