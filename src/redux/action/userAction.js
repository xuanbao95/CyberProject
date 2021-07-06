import Axios from "axios";
import * as action from "../constants/ActionType"
import Swal from "sweetalert2"


export const actPostListUser = (listUser) => {
    return {
        type: action.POST_DETAIL_USER,
        data: listUser
    }
}


export const actCheckLoginUser = (user, history) => {
    return (dispatch) => {
        Axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        }).then((rs) => {
            if (JSON.parse(localStorage.getItem("maLichChieu") !== null)) {
                Swal.fire("Đăng nhập thành công!", "Nhấn ok để thoát", "Success")
                setTimeout(() => {
                    history.push(
                        `booking/${JSON.parse(localStorage.getItem("maLichChieu"))}`
                    )
                }, 3000)
                localStorage.setItem("user", JSON.stringify(rs.data));
                dispatch(actPostListUser(rs.data))
            } else {
                Swal.fire("Đăng nhập thành công!", "Nhấn ok để thoát", "Success")
                localStorage.setItem("user", JSON.stringify(rs.data));
                history.push("/")
                dispatch(actPostListUser(rs.data))

            }
        }).catch((err) => {
            Swal.fire("Đăng nhập không thành công", err.response.data, "erro")
        })
    }
}