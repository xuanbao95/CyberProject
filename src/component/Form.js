import React, { Component } from 'react'
import { connect } from "react-redux"
import * as ActionType from "../redux/action/userAction"
import Axios from "axios"
import Swal from "sweetalert2"
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link } from 'react-router-dom'
const signUpUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("* Account is required"),
    matKhau: yup.string().required("* Password is required"),
    hoTen: yup.string().required("* Username is required"),
    email: yup
        .string()
        .required("* Email is required")
        .email("* Email is invalid"),
    soDT: yup
        .string()
        .required("* Phone is required")
        .matches(/^[0-9]+$/)
        .required("Phone is invalid")
        .min(8)
        .max(10),
});
const signInUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("* Account is required"),
    matKhau: yup.string().required("* Password is required"),
});
class Forms extends Component {
    handelOnLogin = (value) => {
        this.props.checkLogin(value, this.props.history)
    }
    handOnSubmit = (value) => {
        Axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: value,
        }).then((rs) => {
            Swal.fire("đang ký thành công", "nhấn ok để thoát", "success").then(() => {
                this.props.history.push("/")
            })
        }).catch((er) => {
            Swal.fire("đăng ký ko thành công", er.response.data, "error")
        })
    }
    render() {
        return (
            <div className="login-admin">
                <div className="login-wrap">
                    <div className="login-html">
                        <input
                            id="tab-1"
                            type="radio"
                            name="tab"
                            className="sign-in"
                            defaultChecked
                        />
                        <label htmlFor="tab-1" className="tab">
                            Đăng Nhập
                        </label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" />
                        <label htmlFor="tab-2" className="tab">
                            Đăng Xuất
                        </label>
                        <div className="login-form">
                            <Formik
                                initialValues={{
                                    taiKhoan: "",
                                    matKhau: "",
                                }}
                                validationSchema={signInUserSchema}
                                onSubmit={this.handelOnLogin}
                                render={(formilProps) => (
                                    <Form>
                                        <div className="sign-in-htm">
                                            <div className="group">
                                                <label htmlFor="user" className="label">
                                                    Tài Khoản
                                                </label>
                                                <Field
                                                    name="taiKhoan"
                                                    type="text"
                                                    className="input"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="taiKhoan">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Mật Khẩu
                                                </label>
                                                <Field
                                                    name="matKhau"
                                                    type="password"
                                                    className="input"
                                                    data-type="password"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="matKhau">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <input
                                                    id="check"
                                                    type="checkbox"
                                                    className="check"
                                                    defaultChecked
                                                />
                                                {/* <label htmlFor="check">
                                <span className="icon" /> 
                              </label> */}
                                            </div>
                                            <div className="group">
                                                <button
                                                    className="btn btn-primary button0"
                                                    style={{ width: 400, height: 40, marginLeft: 0 }}
                                                >
                                                    Vào
                                                </button>
                                            </div>
                                            <Link
                                                style={{ textDecoration: "none", color: "white" }}
                                                to="/"
                                            >
                                                {/* <div className="group">
                                <button
                                  className="btn btn-primary button1"
                                  style={{ width: 400, height: 40 }}
                                >
                                  Trở Về
                                </button>
                              </div> */}
                                            </Link>

                                            <div className="hr" />
                                        </div>
                                    </Form>
                                )}
                            />
                            {/* sign up */}
                            <Formik
                                initialValues={{
                                    taiKhoan: "",
                                    matKhau: "",
                                    hoTen: "",
                                    email: "",
                                    soDT: "",
                                    maNhom: "GP09",
                                }}
                                validationSchema={signUpUserSchema}
                                onSubmit={this.handOnSubmit}
                                render={(formilProps) => (
                                    <Form>
                                        <div className="sign-up-htm">
                                            <div className="group">
                                                <label htmlFor="user" className="label">
                                                    Tài khoản
                                                </label>
                                                <Field
                                                    id="user"
                                                    type="text"
                                                    className="input"
                                                    name="taiKhoan"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="taiKhoan">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Mật Khẩu
                                                </label>
                                                <Field
                                                    id="pass"
                                                    type="password"
                                                    className="input"
                                                    data-type="password"
                                                    name="matKhau"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="matKhau">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Tên
                                                </label>
                                                <Field
                                                    id="pass"
                                                    type="text"
                                                    className="input"
                                                    name="hoTen"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="hoTen">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Email
                                                </label>
                                                <Field
                                                    id="pass"
                                                    type="text"
                                                    className="input"
                                                    name="email"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="email">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Số DT
                                                </label>
                                                <Field
                                                    id="phone"
                                                    type="number"
                                                    className="input"
                                                    name="soDT"
                                                    onChange={formilProps.handleChange}
                                                />
                                                <ErrorMessage name="soDT">
                                                    {(msg) => <div className="text-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="group">
                                                <button
                                                    className="btn btn-primary button_signup"
                                                    style={{ width: 385, height: 40, marginLeft: 0 }}
                                                >
                                                    Vào
                                                </button>
                                            </div>
                                            <Link
                                                style={{ textDecoration: "none", color: "white" }}
                                                to="/"
                                            >
                                                <div className="group">
                                                    <button
                                                        className="btn btn-primary button_signup_home"
                                                        style={{ width: 385, height: 40, marginLeft: 0 }}
                                                    >
                                                        Back To Home
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </Form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (user, history) => {
            dispatch(ActionType.actCheckLoginUser(user, history))
        }
    }
}
export default connect(null, mapDispatchToProps)(Forms);