import axios from 'axios'
import { history } from '../../App';
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from '../../util/setting';
import Swal from 'sweetalert2'
export const dangNhapAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: userLogin,
            })
            dispatch({
                type: 'DANG_NHAP',
                tenDangNhap: userLogin.taiKhoan,
                matKhau: userLogin.matKhau,
            })
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
            localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
            // history.push('/home');
            window.location.reload()
        } catch (error) {
            Swal.fire("Đăng ký thất bại", error.response?.data, "error");
        }
    }
}

export const dangKyAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: userLogin,
            })
            console.log(result.data);
            // alert("dang ky thanh cong");
            dispatch({
                type: 'DANG_NHAP',
                tenDangNhap: result.data.taiKhoan,
            })
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
            localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
            Swal.fire("Đăng ký thành công", "nhấn ok để thoát", "success").then(() => {
                window.location.reload()
            })
            // history.push('/home');
        } catch (error) {
            Swal.fire("Đăng ký thất bại", error.response?.data, "error");
        }
    }
}
