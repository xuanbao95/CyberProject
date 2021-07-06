import React, { Component } from 'react'
import cgv from "../images/img/cgv.png"
import bhd from "../images/img/bhd.png"
import gal from "../images/img/galaxycine.png"
import cine from "../images/img/cinestar.png"
import dcine from "../images/img/dcine.png"
import lotte from "../images/img/404b8c4b80d77732e7426cdb7e24be20.png"
import mega from "../images/img/megags.png"
import touch from "../images/img/TOUCH.png"
import beta from "../images/img/bt.jpg"
import dongda from "../images/img/ddc-dong-da-15379624326697.jpg"
import start from "../images/img/star1.png"
import zalo from "../images/img/zalopay_icon.png"
import payz from "../images/img/payoo.jpg"
import vietCom from "../images/img/VCB.png"
import face from "../images/img/facebook-logo.png"
import apple from "../images/img/apple-logo.png"
import and from "../images/img/android-logo.png"
import zion from "../images/img/zion-logo.jpg"
import bao from "../images/img/d1e6bd560daa9e20131ea8a0f62e87f8.png"
import viet from "../images/img/VIETTINBANK.png"
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" className="bg-dark">
                    <div className="footer_up">
                        <div className="container">
                            <div className="row pt-3">
                                <div className="col-md-4">
                                    <div className="left_content">
                                        <h6 className="text-white">Tix</h6>
                                        <div className="left_text d-flex">
                                            <div className="text_left">
                                                <a href="#">FAQ</a>
                                                <br />
                                                <a href="#">Brand Guidelines</a>
                                            </div>
                                            <div className="text_left pl-5">
                                                <a href="#">Thảo thuận sử dụng</a>
                                                <br />
                                                <a href="#">Chính sách bảo mật</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="medium_content">
                                        <h6 className="text-white">Đối Tác</h6>
                                        <div className="web_link d-flex">
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={cgv} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={bhd} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={cine} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={touch} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={dcine} alt /></a>
                                            </div>
                                        </div>
                                        <div className="web_link d-flex">
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={lotte} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={mega} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={beta} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={gal} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={dongda} alt /></a>
                                            </div>
                                        </div>
                                        <div className="web_link d-flex">
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={start} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={zalo} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={payz} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={vietCom} alt /></a>
                                            </div>
                                            <div className="img_flex">
                                                <a href="#"><img className="rounded-circle" src={viet} alt /></a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="right_content d-flex">
                                        <div className="right_logo mr-5">
                                            <h6 className="text-white">MOBILE APP</h6>
                                            <div className="logo d-flex">
                                                <div className="logo_img mr-3">
                                                    <a href="#"><img src={apple} alt /></a>
                                                </div>
                                                <div className="logo_img">
                                                    <a href="#"><img src={and} alt /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right_logo">
                                            <h6 className="text-white">SOCIAL</h6>
                                            <div className="logo d-flex">
                                                <div className="logo_img mr-3">
                                                    <a href="#"><img src={face} alt /></a>
                                                </div>
                                                <div className="logo_img">
                                                    <a href="#"><img src={zalo} alt /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer_down pt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                    <a href="#"><img className="rounded" src={zion} alt /></a>
                                </div>
                                <div className="col-md-8">
                                    <h6 className="text-white">
                                        TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                                    </h6>
                                    <span className="span_down">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                                        Chí Minh, Việt Nam. Giấy chứng nhận đăng ký kinh doanh số:
                                        0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm
                                        2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số Điện
                                        Thoại (Hotline): 1900 545 436</span>
                                    <p className="span_down">Email : <a href="#">support@tix.vn</a></p>
                                </div>
                                <div className="col-md-2">
                                    <a href="#"><img className="rounded" src={bao} alt /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
