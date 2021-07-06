import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import dt from "../images/img/mobile.png"
import hitman from "../images/img/sat-thu-vo-cung-cuc-hitman-agent-jun-c16-15795936177305_215x318.jpg";
import bandao from "../images/img/ban-dao-peninsula-15858185751467_215x318.jpg";
import conjour from "../images/img/am-anh-kinh-hoang-3-the-conjuring-3-c18-15742352934530_215x318.jpg";
import bload from "../images/img/bloodshot-15815812953448_215x318.jpg";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default class Section_2 extends Component {
    useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    render() {
        const classes = this.useStyles;
        var settings1 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 4
        };
        return (
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <div className="left">
                            <p className="text-white left_p">
                                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                                và đổi quà hấp dẫn.
          </p>
                            <button className="btnApp">App miễn phí - Tải về ngay!</button>
                            <p className="text-white text_p">
                                TIX có hai phiên bản <a href> iOS</a> &amp;
            <a href> Android</a>
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div >
                            <div className="right_1"><img src={dt} alt /></div>
                            <Slider {...settings1} className="right_2 ">
                                < div >
                                    <img src={hitman} alt />
                                </div>
                                <div>
                                    <img src={bandao} alt />
                                </div>
                                <div>
                                    <img src={conjour} alt />
                                </div>
                                <div>
                                    <img src={bload} alt />
                                </div>

                            </Slider>
                        </div>
                    </Grid>

                </Grid>
            </div >
        )
    }
}
