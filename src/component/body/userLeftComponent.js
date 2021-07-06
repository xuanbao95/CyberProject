import React, { useState } from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NguoiDungReducer } from '../../redux/reducers/NguoiDungReducer';

export default function UserLeftComponent() {
    let username = '';
    if (localStorage.getItem('userlogin')) {
        username = JSON.parse(localStorage.getItem('userlogin')).taiKhoan;
    }
    let user = useSelector(state => state.NguoiDungReducer);
    const [click, setClick] = useState(user.userChoice);
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
                        <span>Thông tin chung</span>
                    </li>
                    {(click == 'ttcanhan' ?
                        <Fragment>
                            <li className="option p-2 pl-4 bg__active ani-button" onClick={() => {
                                // setClick('ttcanhan');
                                let action = { type: 'THAY_DOI_LUA_CHON', userChoice: 'ttcanhan' };
                                dispatch(action);
                                setClick(user.userChoice);
                            }}>
                                <i class="fas fa-id-card-alt"></i>
                                <span>Thông tin cá nhân</span>
                            </li>
                            <li className="option p-2 pl-4 ani-button" onClick={() => {
                                // setClick('vedadat');
                                let action = { type: 'THAY_DOI_LUA_CHON', userChoice: 'vedadat' };
                                dispatch(action);
                                setClick(user.userChoice);
                            }}>
                                <i class="fas fa-shopping-cart"></i>
                                <span>Vé đã đặt</span>
                            </li>
                        </Fragment>
                        :
                        <Fragment>
                            <li className="option p-2 pl-4 ani-button" onClick={() => {
                                // setClick('ttcanhan');
                                let action = { type: 'THAY_DOI_LUA_CHON', userChoice: 'ttcanhan' };
                                dispatch(action);
                                setClick(user.userChoice);
                            }}>
                                <i class="fas fa-id-card-alt"></i>
                                <span>Thông tin cá nhân</span>
                            </li>
                            <li className="option p-2 pl-4 bg__active ani-button" onClick={() => {
                                // setClick('vedadat');
                                let action = { type: 'THAY_DOI_LUA_CHON', userChoice: 'vedadat' };
                                dispatch(action);
                                setClick(user.userChoice);
                            }}>
                                <i class="fas fa-shopping-cart"></i>
                                <span>Vé đã đặt</span>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </div>
    )
}
