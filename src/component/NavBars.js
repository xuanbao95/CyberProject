import React from 'react'
import { Link } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
import logo from "../../src/images/img/movie-time-neon-logo-cinema-night-neon-vector-21852342.jpg"
export default class NavBars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailUser: {}
        }
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem("user"))) {
            this.setState({
                detailUser: JSON.parse(localStorage.getItem("user"))
            })
        } else {
            this.setState({
                detailUser: null
            })
        }
    }
    handleAdmin = () => {
        if (JSON.parse(localStorage.getItem("userlogin"))) {
            this.props.history.push("/admin")
        } else {

        }
    }
    handleLogInOut = () => {
        localStorage.removeItem("user")
        this.setState({
            detailUser: null
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="navbar">
                    <div className="nav-img">
                        <img src={logo} alt="123" />
                    </div>
                    <div className="">
                        <h3>Hollywood in town</h3>
                    </div>
                    <div className="">
                        {this.state.detailUser === null ?
                            (<Link to="/form">Đăng nhập</Link>) :
                            (<div>
                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {this.state.detailUser.hoTen}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/admin" style="cursor: pointer;">Admin</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><span onClick={this.handleLogInOut}>Đăng Xuất</span></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                <div className="account" style={{ marginTop: '195.6px' }}>
                                    <span className="show">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" style={{ cursor: 'pointer' }} aria-expanded="true">
                                            <img src="https://i.pravatar.cc/150?u=vuong" alt="avt" />
                                            <p style={{ display: 'inline-block' }}>vuong</p>
                                        </a>
                                        <div className="dropdown-menu nav_dropDown" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={this.handleLogInOut}>Đăng xuất</a>
                                            <a className="dropdown-item" href="/user" style={{ cursor: 'pointer' }}>Xem thông tin tài khoản</a>
                                            <a className="dropdown-item" href="/admin" style={{ cursor: 'pointer' }}>Quản lý</a>
                                        </div>
                                    </span>

                                </div>

                            </div>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
