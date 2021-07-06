import React, { Component } from 'react'
import tanTich from "../images/img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
import dinhThu from "../images/img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
import blackmas from "../images/img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
import spider from "../images/img/review-spider-man-into-the-spider-vesre-15886520889426.png"
import sniper from "../images/img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
import blood from "../images/img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731228555.jpg"
import covid from "../images/img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
import sieu from "../images/img/sieu-ve-si-so-vo-the-protector-15838099906207_215x318.jpg"
import Khai from "../images/img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg";
import boc from "../images/img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg";
import dan from "../images/img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png";
import truy from "../images/img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
import bhd from "../images/img/bhd-59k-ve-ca-tuan-16088081864967.jpg"
import tix from "../images/img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
import k from "../images/img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
import start from "../images/img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
import troLai from "../images/img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
import fri from "../images/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099 (1).jpg"
import nhap from "../images/img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
import hoa from "../images/img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164 (1).jpg"
export default class Section_1 extends Component {
    render() {
        return (
            <div id="id3">
                <div>
                    <section id="section_1">
                    </section>
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#dienAnh">Điện Ảnh 24h</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#review">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#khuyenMai">Khuyến Mãi</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane container active" id="dienAnh">
                            <div className="row">
                                <div className="col-md-6 section_1">
                                    <a href="#" className="item_2"><img src={Khai} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                                        </h6>
                                    </a>
                                    <p>
                                        Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp
                                        tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong
                                        cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-6 section_1">
                                    <a href="#" className="item_2"><img className="rounded" src={boc} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                                        </h6>
                                    </a>
                                    <p>
                                        Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                                        độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại
                                        360 Giải Phóng!
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4 section_1">
                                        <a href="#"><img className="rounded" src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png" alt /></a>
                                        <a href="#" className="item_3">
                                            <h6 className="mb-3">
                                                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                                                chiếu
                                            </h6>
                                        </a>
                                        <p>
                                            Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc
                                            bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi
                                            sao “bạc tỷ” của
                                        </p>
                                        <i className="far fa-thumbs-up" />
                                        <span>1</span>
                                        <i className="far fa-comment-alt" />
                                        <span>0</span>
                                    </div>
                                    <div className="col-md-4 section_1">
                                        <a href="#"><img className="rounded" src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg" alt /></a>
                                        <a href="#" className="item_3">
                                            <h6 className="mb-3">
                                                NGÔ THANH VĐang ChiếuÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                                                PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                                            </h6>
                                        </a>
                                        <p>
                                            Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính
                                            thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng
                                            VINAMAN với tổng
                                        </p>
                                        <i className="far fa-thumbs-up" />
                                        <span>1</span>
                                        <i className="far fa-comment-alt" />
                                        <span>0</span>
                                    </div>
                                    <div className="col-md-4 section_small">
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={dan} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                                                        ...
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={truy} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng
                                                        ...
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={dan} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                                                        Christopher Nolan
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="img">
                                                <a href="#"><img className="rounded" src={dan} alt /></a>
                                            </div>
                                            <div className="text_a">
                                                <a href="#" className="item_3">
                                                    <h6 className="mb-3">
                                                        Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                                                        phòng vé' xứ Hàn
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="review">
                            <div className="row">
                                <div className="col-md-6 section_1">
                                    <a href="#"><img className="rounded" src={tanTich} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
                                        </h6>
                                    </a>
                                    <p>
                                        Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-6 section_1">
                                    <a href="#"><img className="rounded" src={dinhThu} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            Review: Dinh Thự Oan Khuất (Ghost Of War)
                                        </h6>
                                    </a>
                                    <p>
                                        Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
                                        Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={blackmas} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                                        </h6>
                                    </a>
                                    <p>
                                        Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo
                                        diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc -
                                        nỗi đau gây nhức
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={sniper} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">
                                            American Sniper - Chính nghĩa hay phi nghĩa?
                                        </h6>
                                    </a>
                                    <p>
                                        American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của
                                        Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim
                                        chậm rãi đưa người
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_small">
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={blood} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                                                    hùng Valiant
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={spider} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    Review: Spider-Man: Into The Spider-Vesre
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={covid} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={sieu} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                                                    giờ lầy lội và hài hước đến thế
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="khuyenMai">
                            <div className="row container">
                                <div className="col-md-6 section_1">
                                    <a href>
                                        <img className="rounded" src={bhd} alt />
                                    </a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">BHD 59K/VÉ CẢ TUẦN !!!</h6>
                                    </a>
                                    <p>
                                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                                        59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-6 section_1">
                                    <a href="#"><img className="rounded" src={tix} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h6>
                                    </a>
                                    <p>
                                        Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                                        voucher thanh toán ZaloPay thả ga
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={k} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</h6>
                                    </a>
                                    <p>
                                        ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ
                                        với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_1">
                                    <a href="#"><img className="rounded" src={start} alt /></a>
                                    <a href="#" className="item_3">
                                        <h6 className="mb-3">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h6>
                                    </a>
                                    <p>
                                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                                        59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                                        Vé Phim trên ZaloPay.
                                    </p>
                                    <i className="far fa-thumbs-up" />
                                    <span>1</span>
                                    <i className="far fa-comment-alt" />
                                    <span>0</span>
                                </div>
                                <div className="col-md-4 section_small">
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={troLai} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={fri} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                                                    Trai Yêu Quái
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={nhap} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé ...
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="img">
                                            <a href="#"><img className="rounded" src={hoa} alt /></a>
                                        </div>
                                        <div className="text_a">
                                            <a href="#" className="item_3">
                                                <h6 className="mb-3">
                                                    [Mega GS] Một đoá hoa thay ngàn lời yêu
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btnXemThem mt-3">Xem Thêm</button>
                </div>

            </div >
        )
    }
}
