import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'


import * as Yup from 'yup'

export default function AdminDSP() {
    let [mangND, setMangND] = useState([{
        email: "danghungthai41@gmail.com",
        hoTen: "Đặng Hùng Thái",
        maLoaiNguoiDung: "KhachHang",
        matKhau: "123456789",
        soDt: "0906709400",
        taiKhoan: "hungthai41",
    }]);

    const [startDate, setStartDate] = useState(new Date());
    const [selectedFile, setSelectedFile] = useState();

    function onFileChange(event) {
        setSelectedFile(event.target.files[0]);
    }

    async function onFileUpload(values) {
        try {
            const formData = new FormData();
            formData.append(
                "File",
                selectedFile,
                selectedFile.name
            );
            formData.append('tenphim', values.tenPhim);
            formData.append('manhom', 'GP06');
            console.log(selectedFile);
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
                method: 'POST',
                data: formData,
                // headers: { "Content-Type": "multipart/form-data" },
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Thêm thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    };

    let [themPhim, setThemPhim] = useState(false);
    let [phimState, setPhimState] = useState({});

    useEffect(async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06',
                method: 'GET',
            });
            setMangND(result.data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            biDanh: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
        },
        validationSchema: Yup.object().shape({
            tenPhim: Yup.string().required('Tên phim không được bỏ trống'),
            biDanh: Yup.string().required('Bí danh không được bỏ trống'),
            trailer: Yup.string(),
            hinhAnh: Yup.string().required('Hình ảnh không được bỏ trống'),
            moTa: Yup.string(),
        }),
        onSubmit: values => {

            themPhimFunc(values);

        }
    });

    const formikUpdate = useFormik({
        initialValues: {
            tenPhim: '',
            biDanh: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
            danhGia: '',
        },
        validationSchema: Yup.object().shape({
            tenPhim: Yup.string().required('Tên phim không được bỏ trống'),
            biDanh: Yup.string().required('Bí danh không được bỏ trống'),
            trailer: Yup.string(),
            hinhAnh: Yup.string().required('Hình ảnh không được bỏ trống'),
            moTa: Yup.string(),
            danhGia: Yup.string(),
        }),
        onSubmit: values => {

        }
    });

    async function themPhimFunc(values) {
        values['ngayKhoiChieu'] = document.getElementById('ngayKhoiChieu').value;
        values['danhGia'] = 0;
        values['maPhim'] = 0;
        values['maNhom'] = "GP06";
        values['danhGia'] = 0;
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
                method: 'POST',
                data: values,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            if (result.statusText == 'OK') {
                onFileUpload(values);
            }
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    }

    useEffect(() => {
        setPhimState(phimState);
    }, [phimState])

    function changeState(event) {
        let testUser = phimState;
        testUser[event.target.name] = event.target.value;
        setPhimState(testUser);
    }

    async function fakeSubmition() {
        phimState['ngayKhoiChieu'] = document.getElementById('ngayKhoiChieu').value;
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
                method: 'POST',
                data: phimState,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            if (result.statusText == 'OK') {
                onFileUpload(phimState);
            }
            localStorage.removeItem('phimUpdate');
            // window.location.reload();
        } catch (error) {
            Swal.fire("Thêm thất bại", error.response?.data, "error")
        }
    }

    async function deleteUser() {
        // console.log(phimState.taiKhoan);
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${phimState.maPhim}`,
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Xóa thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
        } catch (error) {
            console.log('error: ', error.response?.data); //?optional chaining
        }
    }

    function renderMangDSP() {
        return (
            mangND.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.tenPhim}</td>
                        <td>{item.trailer}</td>
                        <td>{item.ngayKhoiChieu}</td>
                        <td>
                            <img src={item.hinhAnh} style={{ maxWidth: '100px' }}></img>
                        </td>
                        <td>{item.danhGia}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => {
                                localStorage.setItem('phimUpdate', JSON.stringify(item));
                                setPhimState(JSON.parse(localStorage.getItem('phimUpdate')));
                                setThemPhim(false);
                            }}><i className="fas fa-cogs"></i></button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <React.Fragment>
            <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>
                                Bạn có chắc vẫn muốn xóa phim này
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={deleteUser}>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="user-right-right">
                    {themPhim == true ?
                        <React.Fragment>
                            <div className="row title">
                                <div className="col-6">
                                    <h1>Thêm phim</h1>
                                </div>
                                <div className="col-6">
                                    <span className="hideOption" onClick={() => { setThemPhim(false); setPhimState({}); }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>Tên phim</label>
                                        <input type="text" name="tenPhim" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.tenPhim ? <p className="text-danger">{formik.errors.tenPhim}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Bí danh</label>
                                        <input type="text" name="biDanh" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.biDanh ? <p className="text-danger">{formik.errors.biDanh}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Link trailer</label>
                                        <input type="text" name="trailer" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.trailer ? <p className="text-danger">{formik.errors.trailer}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mô tả</label>
                                        <textarea type="text" name="moTa" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.moTa ? <p className="text-danger">{formik.errors.moTa}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Hình ảnh</label>
                                        <input type="file" name="hinhAnh" className="form-control" onInput={onFileChange} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.hinhAnh ? <p className="text-danger">{formik.errors.hinhAnh}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Ngày khởi chiếu</label>
                                        <br></br>
                                        <DatePicker
                                            className="form-control"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            timeInputLabel="Time:"
                                            dateFormat="dd/MM/yyyy"
                                            showTimeInput
                                            style={{ width: "100%" }}
                                            name="ngayKhoiChieu"
                                            id="ngayKhoiChieu"
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        {/* <button className="btn btn-primary" onClick={console.log(document.getElementById("ngayKhoiChieu").value)}> asd</button> */}
                                        <button className="btn btn-success" type="submit">Thêm</button>
                                    </div>
                                </div>
                            </form>
                            <hr></hr>
                        </React.Fragment>
                        :
                        ''
                    }
                    {phimState?.tenPhim ?
                        <React.Fragment>
                            <div className="row title">
                                <div className="col-6">
                                    <h1>Sửa thông tin phim</h1>
                                </div>
                                <div className="col-6">
                                    <span className="hideOption" onClick={() => { setThemPhim(false); setPhimState({}); }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                            <form onSubmit={formikUpdate.handleSubmit}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>Tên phim</label>
                                        <input type="text" name="tenPhim" disabled value={phimState.tenPhim} className="form-control" />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Bí danh</label>
                                        <input type="text" name="biDanh" className="form-control" value={phimState.biDanh} />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Link trailer</label>
                                        <input type="text" name="trailer" className="form-control" value={phimState.trailer} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.trailer ? <p className="text-danger">{formikUpdate.errors.trailer}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mô tả</label>
                                        <input type="text" name="moTa" className="form-control" value={phimState.moTa} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.moTa ? <p className="text-danger">{formikUpdate.errors.moTa}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Hình ảnh</label>
                                        <input type="file" name="hinhAnh" className="form-control" onInput={onFileChange} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.hinhAnh ? <p className="text-danger">{formikUpdate.errors.hinhAnh}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Đánh giá</label>
                                        <input type="text" name="danhGia" className="form-control" value={phimState.danhGia} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.danhGia ? <p className="text-danger">{formikUpdate.errors.danhGia}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Ngày khởi chiếu</label>
                                        <br></br>
                                        <DatePicker
                                            className="form-control"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            timeInputLabel="Time:"
                                            dateFormat="dd/MM/yyyy"
                                            showTimeInput
                                            style={{ width: "100%" }}
                                            name="ngayKhoiChieu"
                                            id="ngayKhoiChieu"
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                    </div>
                                    <div className="form-group col-6">
                                        <button className="btn btn-primary" type="submit" onClick={fakeSubmition}>Cập nhật</button>
                                    </div>
                                    <div className="col-6 form-group">
                                        <button type="button" className="btn btn-danger ml-2" data-toggle="modal" data-target="#exampleModal1">Xóa</button>
                                    </div>
                                </div>
                            </form>
                            <hr></hr>
                        </React.Fragment>
                        :
                        ''
                    }
                    <h1>
                        Danh sách tài khoản
                        <button class="btn btn-success ml-5" onClick={() => { setThemPhim(true); setPhimState({}); }}>Thêm</button>
                    </h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Tài khoản</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">Email</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Mã loại người dùng</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderMangDSP()}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}
