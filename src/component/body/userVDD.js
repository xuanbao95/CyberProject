import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

export default function UserVDD() {
    let [thongTinDatVe, setThongTinDatVe] = useState([{
        "danhSachGhe": [{
            "maCumRap": "Rạp 6",
            "maGhe": 49802,
            "maHeThongRap": "BHDStar",
            "maRap": 466,
            "tenCumRap": "Rạp 6",
            "tenGhe": "02",
            "tenHeThongRap": "BHD Star Cineplex - Bitexco",
            "tenRap": "Rạp 6",
        }],
        "giaVe": 80000,
        "maVe": 47207,
        "ngayDat": "2021-03-07T15:27:40.31",
        "tenPhim": "Diệp Vấn",
        "thoiLuongPhim": 120,
    }]);
    // let [pagination, setPagination] = useState({
    //     pageActive: 1,
    //     pageTotal: 0,
    // });

    let taiKhoan = JSON.parse(localStorage.getItem('userlogin'));
    useEffect(async () => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'POST',
                data: taiKhoan,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken'),
                }
            });
            setThongTinDatVe(result.data.thongTinDatVe);
        } catch (error) {
            console.log(error);
        }
    }, [])
    function renderTableDatVe() {
        return thongTinDatVe.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.tenPhim}</td>
                    <td>{item.ngayDat}</td>
                    <td>{item.thoiLuongPhim}</td>
                    <td>{item.danhSachGhe[0].tenHeThongRap}</td>
                    <td>{item.danhSachGhe.map((ghe, indexx) => {
                        return (
                            <div className="ghe" key={indexx}>{ghe.tenGhe}</div>
                        )
                    })}</td>
                    <td>{item.maVe}</td>
                    <td>{item.giaVe.toLocaleString()}</td>
                </tr>
            )
        })
    }
    return (
        <Container className="pt-5">
            <div className="ticket-booked text-center">
                <h1>Thông tin đặt vé</h1>
                <hr></hr>
                <table id="tableDatVe">
                    <thead>
                        <tr>
                            <th>Tên phim</th>
                            <th>Ngày đặt</th>
                            <th>Thời lượng phim</th>
                            <th>Rạp</th>
                            <th>Ghế số</th>
                            <th>Mã vé</th>
                            <th>Giá vé</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableDatVe()}
                    </tbody>
                </table>
            </div>
        </Container>
    )
}
