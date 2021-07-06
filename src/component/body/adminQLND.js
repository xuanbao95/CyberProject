import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import * as Yup from 'yup'
import Swal from 'sweetalert2'

export default function AdminQLND() {
    let [mangND, setMangND] = useState([{
        email: "danghungthai41@gmail.com",
        hoTen: "Đặng Hùng Thái",
        maLoaiNguoiDung: "KhachHang",
        matKhau: "123456789",
        soDt: "0906709400",
        taiKhoan: "hungthai41",
    }]);

    let [themND, setThemND] = useState(false);
    let [userState, setUserState] = useState({});

    useEffect(async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06',
                method: 'GET',
            });
            setMangND(result.data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            soDT: '',
            hoTen: '',
            email: '',
            maLoaiNguoiDung: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống').min(6, 'Tài khoản ít nhất 6 ký tự'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6-32 ký tự'),
            soDT: Yup.string(),
            hoTen: Yup.string(),
            email: Yup.string().required('Email không được bỏ trống').email('Email phải đúng định dạng'),
            maLoaiNguoiDung: Yup.string().required('Không được bỏ trống'),
        }),
        onSubmit: values => {
            themUser(values);
        }
    });

    const formikUpdate = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            soDT: '',
            hoTen: '',
            email: '',
            maLoaiNguoiDung: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string(),
            matKhau: Yup.string(),
            soDT: Yup.string(),
            hoTen: Yup.string(),
            email: Yup.string().required('Email không được bỏ trống').email('Email phải đúng định dạng'),
            maLoaiNguoiDung: Yup.string().required('Không được bỏ trống'),
        }),
        onSubmit: values => {

        }
    });

    async function themUser(values) {
        values['maNhom'] = "GP06";
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
                method: 'POST',
                data: values,
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
    }

    function renderMangND() {
        return (
            mangND.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.taiKhoan}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.email}</td>
                        <td>{item.soDt}</td>
                        <td>{item.maLoaiNguoiDung}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => {
                                localStorage.setItem('userUpdate', JSON.stringify(item));
                                setUserState(JSON.parse(localStorage.getItem('userUpdate')));
                                setThemND(false);
                            }}><i className="fas fa-cogs"></i></button>

                        </td>
                    </tr>
                )
            })
        )
    }

    useEffect(() => {
        setUserState(userState);
    }, [userState])

    function changeState(event) {
        let testUser = userState;
        testUser[event.target.name] = event.target.value;
        setUserState(testUser);
    }

    async function fakeSubmition() {
        userState['maNhom'] = "GP06";
        if (!(formikUpdate.errors.matKhau || formikUpdate.errors.email || formikUpdate.errors.hoTen || formikUpdate.errors.soDT || formikUpdate.errors.taiKhoan)) {
            try {
                const result = await axios({
                    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                    method: 'PUT',
                    data: userState,
                    headers: {
                        "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                    }
                })
                localStorage.removeItem('userUpdate');
                Swal.fire("Sửa thành công", "nhấn ok để thoát", "success").then(() => {
                    window.location.reload()
                })
            } catch (error) {
                Swal.fire("Sửa thất bại", error.response?.data, "error")
                // console.log('error: ', error.response?.data); //?optional chaining
            }
        }
    }

    async function deleteUser() {
        // console.log(userState.taiKhoan);
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userState.taiKhoan}`,
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Xóa thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
        } catch (error) {
            Swal.fire("Xóa thất bại", error.response?.data, "error")
            // console.log('error: ', error.response?.data); //?optional chaining
        }
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
                                Bạn có chắc vẫn muốn xóa người dùng này
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
                    {themND == true ?
                        <React.Fragment>
                            <div className="row title">
                                <div className="col-6">
                                    <h1>Thêm người dùng</h1>
                                </div>
                                <div className="col-6">
                                    <span className="hideOption" onClick={() => { setThemND(false); setUserState({}); }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>Tài khoản</label>
                                        <input type="text" name="taiKhoan" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.taiKhoan ? <p className="text-danger">{formik.errors.taiKhoan}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mật khẩu</label>
                                        <input type="password" name="matKhau" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.matKhau ? <p className="text-danger">{formik.errors.matKhau}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Họ tên</label>
                                        <input type="text" name="hoTen" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.hoTen ? <p className="text-danger">{formik.errors.hoTen}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.email ? <p className="text-danger">{formik.errors.email}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Số điện thoại</label>
                                        <input type="text" name="soDT" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched && formik.errors.soDT ? <p className="text-danger">{formik.errors.soDT}</p> : ''}
                                    </div>
                                    <div className="form-group col-6">
                                        <label for="select">Mã loại người dùng</label>
                                        <select className="form-control" id="maLoaiNguoiDung" name="maLoaiNguoiDung" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                            <option value="" selected disabled>--</option>
                                            <option value="KhachHang" >Khách hàng</option>
                                            <option value="QuanTri" >Quản trị</option>
                                        </select>
                                        {formik.touched && formik.errors.maLoaiNguoiDung ? <p className="text-danger">{formik.errors.maLoaiNguoiDung}</p> : ''}
                                    </div>
                                    <div className="form-group col-6">
                                        <button className="btn btn-success" type="submit">Thêm</button>
                                    </div>
                                </div>
                            </form>
                            <hr></hr>
                        </React.Fragment>
                        :
                        ''
                    }
                    {userState?.taiKhoan ?
                        <React.Fragment>
                            <div className="row title">
                                <div className="col-6">
                                    <h1>Sửa người dùng</h1>
                                </div>
                                <div className="col-6">
                                    <span className="hideOption" onClick={() => { setThemND(false); setUserState({}); }}><i class="fas fa-times"></i></span>
                                </div>
                            </div>
                            <form onSubmit={formikUpdate.handleSubmit}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>Tài khoản</label>
                                        <input type="text" name="taiKhoan" disabled value={userState.taiKhoan} className="form-control" />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Mật khẩu</label>
                                        <input type="password" name="matKhau" className="form-control" disabled value={userState.matKhau} />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Họ tên</label>
                                        <input type="text" name="hoTen" className="form-control" value={userState.hoTen} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.hoTen ? <p className="text-danger">{formikUpdate.errors.hoTen}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" value={userState.email} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.email ? <p className="text-danger">{formikUpdate.errors.email}</p> : ''}
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>Số điện thoại</label>
                                        <input type="text" name="soDt" className="form-control" value={userState.soDt} onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur} />
                                        {formikUpdate.touched && formikUpdate.errors.soDT ? <p className="text-danger">{formikUpdate.errors.soDT}</p> : ''}
                                    </div>
                                    <div className="form-group col-6">
                                        <label for="select">Mã loại người dùng</label>
                                        <select className="form-control" id="maLoaiNguoiDung" name="maLoaiNguoiDung" onInput={changeState} onChange={formikUpdate.handleChange} onBlur={formikUpdate.handleBlur}>
                                            {(userState.maLoaiNguoiDung == 'KhachHang' ?
                                                <React.Fragment>
                                                    <option value="KhachHang" selected>Khách hàng</option>
                                                    <option value="QuanTri">Quản trị</option>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                    <option value="KhachHang" >Khách hàng</option>
                                                    <option value="QuanTri" selected>Quản trị</option>
                                                </React.Fragment>
                                            )}
                                        </select>
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
                        <button className="btn btn-success ml-5" onClick={() => { setThemND(true); setUserState({}); }}>Thêm</button>
                    </h1>
                    <table className="table">
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
                            {renderMangND()}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment >

    )
}
