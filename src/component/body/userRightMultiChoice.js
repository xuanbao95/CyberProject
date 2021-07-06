import React from 'react'
import { useDispatch } from 'react-redux';

export default function UserRightMultiChoice() {
    const dispatch = useDispatch();
    return (
        <div className="col-3 user-right-left">
            <ul className="mb-5">
                <li className="ani-button" onClick={() => {
                    let action = { type: 'THAY_DOI_LUA_CHON_THU_HAI', userSecondChoice: 'tttk' };
                    dispatch(action);
                }}>
                    <i class="fas fa-user"></i>
                    <span>Thông tin tài khoản</span>
                </li>
                <li className="ani-button" onClick={() => {
                    let action = { type: 'THAY_DOI_LUA_CHON_THU_HAI', userSecondChoice: 'dmk' };
                    dispatch(action);
                }}>
                    <i class="fas fa-unlock-alt"></i>
                    <span>Đổi mật khẩu</span>
                </li>
                <li className="ani-button" onClick={() => {
                    let action = { type: 'THAY_DOI_LUA_CHON_THU_HAI', userSecondChoice: 'tdtt' };
                    dispatch(action);
                }}>
                    <i class="fas fa-cog"></i>
                    <span>Thay đổi thông tin cá nhân</span>
                </li>
            </ul>
        </div>
    )
}
