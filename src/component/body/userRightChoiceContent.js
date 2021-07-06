import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup'
import Swal from 'sweetalert2'
export default function UserRightChoiceContent() {
    let user = useSelector(state => state.NguoiDungReducer);
    let userInfo = JSON.parse(localStorage.getItem('userlogin'));
    const [userState, setUserState] = useState(userInfo);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            matKhau: '',
            newPwd: '',
            renewPwd: ''
        },
        validationSchema: Yup.object().shape({
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6-32 ký tự'),
            newPwd: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6-32 ký tự'),
            renewPwd: Yup.string().oneOf([Yup.ref('newPwd'), null], 'Mật khẩu phải khớp'),
            // renewPwd: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự')
        }),
        onSubmit: values => {
            // console.log(values);
            let user = JSON.parse(localStorage.getItem('userlogin'));
            user.matKhau = values.newPwd;
            thayDoiMK(user, values.matKhau)
        }
    });

    const formikTDTT = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            soDT: '',
            hoTen: '',
            email: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required(''),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6-32 ký tự'),
            soDT: Yup.string(),
            hoTen: Yup.string(),
            email: Yup.string().required('Email không được bỏ trống').email('Email phải đúng định dạng')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    async function putPassword(user) {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: user,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Đổi mật khẩu thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
        } catch (error) {
            Swal.fire("Đổi mật khẩu không thành công", error.response?.data, "error");
        }
    }

    async function thayDoiMK(user, matKhau) {
        let userLogin = {
            "taiKhoan": JSON.parse(localStorage.getItem('userlogin')).taiKhoan,
            "matKhau": matKhau,
        }
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: userLogin,
            })
            if (result.statusText == "OK") {
                putPassword(user);
            }
        } catch (error) {
            Swal.fire("Đổi mật khẩu không thành công", error.response?.data, "error");
        }
    }

    useEffect(() => {
        setUserState(userState);
    }, [userState])

    function changeState(event) {
        let testUser = userState;
        testUser[event.target.name] = event.target.value;
        setUserState(testUser);
    }

    async function changeInfoUser() {
        userState['maLoaiNguoiDung'] = JSON.parse(localStorage.getItem('userlogin')).maLoaiNguoiDung;
        userState['maNhom'] = JSON.parse(localStorage.getItem('userlogin')).maNhom;
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: userState,
                headers: {
                    "Authorization": "Bearer  " + localStorage.getItem('accessToken')
                }
            })
            Swal.fire("Cập nhật thông tin thành công", "nhấn ok để thoát", "success");
            localStorage.setItem('userlogin', JSON.stringify(userState));
        } catch (error) {
            Swal.fire("Cập nhật thông tin không thành công", error.response?.data, "error");
            console.log('error: ', error.response?.data); //?optional chaining
        }
    }

    async function fakeSubmition() {
        if (!(formikTDTT.errors.matKhau || formikTDTT.errors.email || formikTDTT.errors.hoTen || formikTDTT.errors.soDT || formikTDTT.errors.taiKhoan)) {
            if (userState.matKhau) {
                // console.log(userState);
                let userLogin = {
                    "taiKhoan": userState.taiKhoan,
                    "matKhau": userState.matKhau,
                }
                try {
                    const result = await axios({
                        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
                        method: 'POST',
                        data: userLogin,
                    })
                    if (result.statusText == "OK") {
                        changeInfoUser();
                    }
                } catch (error) {
                    Swal.fire("Cập nhật thông tin không thành công", error.response?.data, "error");
                }
            }
        }
    }

    switch (user.userSecondChoice) {
        case 'tttk': {
            return (
                <div className="col-9 ">
                    <div className="user-right-right">
                        <h1>Thông tin tài khoản</h1>
                        <hr></hr>
                        <div className="row right-item">
                            <div className="col-1">
                                <i class="fas fa-portrait"></i>
                            </div>
                            <div className="col-11">
                                <h6>Tên khách hàng: <span>{JSON.parse(localStorage.getItem('userlogin')).hoTen}</span></h6>
                                <p>Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị trên website. Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row right-item">
                            <div className="col-1">
                                <i class="fas fa-user"></i>
                            </div>
                            <div className="col-11">
                                <h6>Tài khoản: <span>{JSON.parse(localStorage.getItem('userlogin')).taiKhoan}</span></h6>
                                <p>Là tên tài khoản (username) để đăng nhập tài khoản.</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row right-item">
                            <div className="col-1">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div className="col-11">
                                <h6>Mật khẩu</h6>
                                <p>Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký tự đặc biệt để bảo mật tài khoản.</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row right-item">
                            <div className="col-1">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div className="col-11">
                                <h6>Số điện thoại: <span>{JSON.parse(localStorage.getItem('userlogin')).soDT}</span></h6>
                                <p>Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị trên website. Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row right-item">
                            <div className="col-1">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div className="col-11">
                                <h6>Email: <span>{JSON.parse(localStorage.getItem('userlogin')).email}</span></h6>
                                <p>Email có thể được sử dụng để thay đổi mật khẩu khi không có công cụ bảo mật nào khác được bật. Cũng như nhận các tin tức hoạt động của tài khoản.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        case 'dmk': {
            return (
                <div className="col-9 ">
                    <div className="user-right-right">
                        <h1>Đổi mật khẩu</h1>
                        <hr></hr>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group" >
                                <label>Mật khẩu cũ</label>
                                <input type="password" name="matKhau" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched && formik.errors.matKhau ? <p className="text-danger">{formik.errors.matKhau}</p> : ''}
                            </div>
                            <div className="form-group" >
                                <label>Mật khẩu mới</label>
                                <input type="password" name="newPwd" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched && formik.errors.newPwd ? <p className="text-danger">{formik.errors.newPwd}</p> : ''}
                            </div>
                            <div className="form-group">
                                <label>Nhập lại mật khẩu mới</label>
                                <input type="password" name="renewPwd" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched && formik.errors.renewPwd ? <p className="text-danger">{formik.errors.renewPwd}</p> : ''}
                            </div>
                            <div id="textDangerChangePwd" style={{ fontSize: "0.8rem" }}>
                                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                            </div>
                            <button type="submit">Đổi mật khẩu</button>
                        </form>
                    </div>
                </div>
            )
        }
        case 'tdtt': {
            return (
                <div className="col-9 ">
                    <div className="user-right-right">
                        <h1>Thay đổi thông tin cá nhân</h1>
                        <hr></hr>
                        <form onSubmit={formikTDTT.handleSubmit}>
                            <div className="form-group" >
                                <label>Tài khoản</label>
                                <input type="text" name="taiKhoan" className="form-control" disabled value={userState.taiKhoan} />
                            </div>
                            <div className="form-group" >
                                <label>Tên khách hàng</label>
                                <input type="text" name="hoTen" className="form-control" value={userState.hoTen} onInput={changeState} onChange={formikTDTT.handleChange} onBlur={formikTDTT.handleBlur} />
                                {formikTDTT.touched && formikTDTT.errors.hoTen ? <p className="text-danger">{formikTDTT.errors.hoTen}</p> : ''}
                            </div>
                            <div className="form-group" >
                                <label>Số điện thoại</label>
                                <input type="number" name="soDT" className="form-control" value={userState.soDT} onInput={changeState} onChange={formikTDTT.handleChange} onBlur={formikTDTT.handleBlur} />
                                {formikTDTT.touched && formikTDTT.errors.soDT ? <p className="text-danger">{formikTDTT.errors.soDT}</p> : ''}
                            </div>
                            <div className="form-group" >
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" value={userState.email} onInput={changeState} onChange={formikTDTT.handleChange} onBlur={formikTDTT.handleBlur} />
                                {formikTDTT.touched && formikTDTT.errors.email ? <p className="text-danger">{formikTDTT.errors.email}</p> : ''}
                            </div>
                            <div className="form-group" >
                                <label>Nhập lại mật khẩu</label>
                                <input type="password" name="matKhau" className="form-control" onInput={changeState} onChange={formikTDTT.handleChange} onBlur={formikTDTT.handleBlur} />
                                {formikTDTT.touched && formikTDTT.errors.matKhau ? <p className="text-danger">{formikTDTT.errors.matKhau}</p> : ''}
                            </div>
                            <button type="submit" onClick={fakeSubmition}>Cập nhật</button>
                        </form>
                    </div>
                </div >
            )
        }
    }
}
