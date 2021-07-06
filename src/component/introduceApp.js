import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Container, Row, Col } from 'react-grid-system';
import mobile from '../../src/images/img/mobile.png'
import img1 from '../images/img/sat-thu-vo-cung-cuc-hitman-agent-jun-c16-15795936177305_215x318.jpg'
import img2 from '../images/img/ban-dao-peninsula-15858185751467_215x318.jpg'
import img3 from '../images/img/am-anh-kinh-hoang-3-the-conjuring-3-c18-15742352934530_215x318.jpg'
import img4 from '../images/img/bloodshot-15815812953448_215x318.jpg'
import img5 from '../images/img/can-ho-cua-quy-32-malasana-street-15825141899435_215x318.jpg'

export default function IntroduceApp() {
    return (
        <div id="id4">
            <section id="section_2">
                <div className="introduceApp mt-5">
                    <div className="container">
                        <Row className="row">
                            <Col className="left">
                                <p className="text-white left_p">
                                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                                    và đổi quà hấp dẫn.
                                </p>
                                <button className="btnApp">App miễn phí - Tải về ngay!</button>
                                <p className="text-white text_p">
                                    TIX có hai phiên bản <a href> iOS</a> &amp;
                                    <a href> Android</a>
                                </p>
                            </Col>
                            <Col className="">
                                <div className="right_1"><img src={mobile} alt="mobile" className="right_img" /></div>
                                <Carousel fade nextIcon="" indicators="" className="right_2">
                                    <Carousel.Item >
                                        <img src={img1} alt="img1" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img2} alt="img2" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img3} alt="img3" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img4} alt="img4" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img5} alt="img5" />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    )
}
