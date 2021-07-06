import React, { Component } from 'react'
import * as action from "../redux/action";
import { connect } from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from '3d-react-carousal';
import Dialog1 from "./Dialog"
import Slider from "react-slick"
// import Carousel from './Carousel';
import pic1 from "../images/img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png";
import pic2 from "../images/img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
import pic3 from "../images/img/bloodshot-c18-15840272355055.png"
import banner1 from "../images/img/vin-diesel-BLOODSHOT.png";
import banner2 from "../images/img/sieu-ve-si-so-vo.jpg";
import banner3 from "../images/img/vi-anh-van-tin.jpg";

export default class ListCarousel extends Component {

    slides = [


        < img src={pic1} alt="1" />,
        <img src={pic2} alt="1" />,
        <img src={pic3} alt="1" />,
        <img src={banner1} alt="1" />,
        <img src={banner2} alt="1" />,
        <img src={banner3} alt="1" />,
    ]
    render() {

        return (
            <div className="Carou">

                <Carousel slides={this.slides} autoplay={true} interval={3000}></Carousel>
            </div>
        )
    }

}


