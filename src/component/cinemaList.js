import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from "react-router-dom";


export default function CinemaListComponent() {
    const [chosenCinema, setChosenCinema] = useState("BHDStar");
    const [listCinema, setListCinema] = useState([]);
    const [listCumRap, setListCumRap] = useState([
        {
            "lstCumRap": [
                {
                    "danhSachPhim": [
                        {
                            "maPhim": 1314,
                            "tenPhim": "Ted 2",
                            "maRap": "467",
                            "tenRap": "Rạp 7",
                            "ngayChieuGioChieu": "2019-01-01T10:10:00",
                            "giaVe": 75000
                        }
                    ],
                    "maCumRap": "bhd-star-cineplex-vincom-quang-trung",
                    "tenCumRap": "BHD Star Cineplex - Vincom Quang Trung",
                    "diaChi": "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
                }
            ],
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "mahom": "GP01"
        }
    ]);
    const [danhSachPhim, setDanhSachPhim] = useState([
        {
            "maPhim": 1314,
            "tenPhim": "Ted 2",
            "maRap": "467",
            "tenRap": "Rạp 7",
            "ngayChieuGioChieu": "2019-01-01T10:10:00",
            "giaVe": 75000
        }
    ]);
    const [maCumRap, setMaCumRap] = useState("bhd-star-cineplex-pham-hung");
    useEffect(async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET',
            });
            setListCinema(result.data);
        } catch (error) {
            console.log(error);
        }
    }, [])
    useEffect(async () => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP06`,
                method: 'GET',
            });
            setListCumRap(result.data);
        } catch (error) {
            console.log(error);
        }
    }, [])
    useEffect(async () => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP06`,
                method: 'GET',
            });
            for (let element of result.data[0].lstCumRap) {
                if (element.maCumRap === "bhd-star-cineplex-pham-hung") {
                    // console.log(element.danhSachPhim);
                    setDanhSachPhim(element.danhSachPhim);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [])
    async function thayDoiHTRap(maHeThongRap) {
        setChosenCinema(maHeThongRap);
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP06`,
                method: 'GET',
            });
            setListCumRap(result.data);
        } catch (error) {
            console.log(error);
        }
    }
    function layDanhSachPhim(maCumRap) {
        for (let element of listCumRap[0].lstCumRap) {
            if (element.maCumRap === maCumRap) {
                // console.log(element.maCumRap);
                setDanhSachPhim(element.danhSachPhim);
            }
        }
    }
    function renderDanhSachPhim() {
        return (
            danhSachPhim.map((item, index) => {
                return (
                    <div className="row mb-5 pl-3" key={index}>
                        <div className="col-3">
                            <img src={item.hinhAnh} alt="hinhPhim" style={{ width: "100%", height: "209.8px" }} />
                        </div>
                        <span style={{ fontSize: "2rem", paddingTop: "0", }}>{item.tenPhim}</span>
                        <div style={{ display: "block" }}>
                            <Link href="" to={`/detailMovie/${item.maPhim}`}>
                                <button className='btn btn-success'>
                                    Mua Vé
                                </button>
                            </Link>
                        </div>
                    </div >
                )
            })
        )
    }
    function renderDanhSachCumRap() {
        return (
            listCumRap[0].lstCumRap.map((item, index) => {
                return (
                    <div key={index} className={item.maCumRap == maCumRap ? 'cinema__item opa-1' : 'cinema__item'} onClick={() => {
                        layDanhSachPhim(item.maCumRap);
                        setMaCumRap(item.maCumRap);
                    }}>
                        <img src='https://picsum.photos/100/100' alt="hinhRap" />
                        <div className="txt-right">
                            <div>
                                <h6> {item.tenCumRap}</h6>
                            </div>
                            <p>{item.diaChi}</p>
                            <h5>[Chi tiết]</h5>
                        </div>
                    </div>
                )
            })
        )
    }
    function renderListCinema() {
        return listCinema.map((item, index) => {
            return <div onClick={() => {
                // console.log(item.maHeThongRap);
                thayDoiHTRap(item.maHeThongRap);
                setDanhSachPhim([]);
            }
            } key={index} >
                <img id={item.maHeThongRap} className={item.maHeThongRap == chosenCinema ? 'cinema__img opa-1' : 'cinema__img'} src={item.logo} alt="cinema" />
            </div >
        })
    }
    return (
        <div id="id2" style={{ marginTop: "60px" }}>
            <Container className="main-cinema">
                <div className="cinema">
                    {renderListCinema()}
                </div>
                <div id="cinema__content" className="nameMovieCinema">
                    {renderDanhSachCumRap()}
                </div>
                <div className="wrapMovie" style={{ overflowY: "auto", overflowX: "hidden" }}>
                    <span>
                        {renderDanhSachPhim()}
                    </span>
                </div>
            </Container>
        </div >
    )
}
