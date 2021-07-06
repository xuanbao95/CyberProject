import React, { useState } from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NguoiDungReducer } from '../../redux/reducers/NguoiDungReducer';

export default function AdminLeftComponent() {
    let username = '';
    if (localStorage.getItem('userlogin')) {
        username = JSON.parse(localStorage.getItem('userlogin')).taiKhoan;
    }
    let user = useSelector(state => state.NguoiDungReducer);
    let admin = useSelector(state => state.AdminReducer);

    const [click, setClick] = useState(admin.adminChoice);
    const dispatch = useDispatch();

    return (
        <div className="col-2 user-left border-right border-bottom" style={{ minHeight: "100%" }}>
            <div className="userInfo">
                <img src={`https://i.pravatar.cc/150?u=${username}`} />
                <div className="username">{username}</div>
                <div>{JSON.parse(localStorage.getItem('userlogin')).maLoaiNguoiDung}</div>
            </div>
            <div className="openList">
                <ul>
                    <li className="title p-2 pl-4 border-bottom">
                        <i class="fas fa-house-user"></i>
                        <span>Chức năng quản lý</span>
                    </li>
                    {(click == 'qlnd' ?
                        <Fragment>
                            <li className="option p-2 pl-4 bg__active ani-button" onClick={() => {
                                // setClick('ttcanhan');
                                let action = { type: 'THAY_DOI_LUA_CHON', adminChoice: 'qlnd' };
                                dispatch(action);
                                setClick(admin.adminChoice);
                            }}>
                                <i class="fas fa-id-card-alt"></i>
                                <span>Quản lý người dùng</span>
                            </li>
                            <li className="option p-2 pl-4 ani-button" onClick={() => {
                                // setClick('vedadat');
                                let action = { type: 'THAY_DOI_LUA_CHON', adminChoice: 'qlp' };
                                dispatch(action);
                                setClick(admin.adminChoice);
                            }}>
                                <i class="fas fa-shopping-cart"></i>
                                <span>Quản lý phim</span>
                            </li>
                        </Fragment>
                        :
                        <Fragment>
                            <li className="option p-2 pl-4 ani-button" onClick={() => {
                                // setClick('ttcanhan');
                                let action = { type: 'THAY_DOI_LUA_CHON', adminChoice: 'qlnd' };
                                dispatch(action);
                                setClick(admin.adminChoice);
                            }}>
                                <i class="fas fa-id-card-alt"></i>
                                <span>Quản lý người dùng</span>
                            </li>
                            <li className="option p-2 pl-4 bg__active ani-button" onClick={() => {
                                // setClick('vedadat');
                                let action = { type: 'THAY_DOI_LUA_CHON', adminChoice: 'qlp' };
                                dispatch(action);
                                setClick(admin.adminChoice);
                            }}>
                                <i class="fas fa-shopping-cart"></i>
                                <span>Quản lý phim</span>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </div>
    )
}
