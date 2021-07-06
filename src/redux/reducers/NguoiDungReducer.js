let tenDN = '';
if (localStorage.getItem('userlogin')) {
    let userLogin = JSON.parse(localStorage.getItem('userlogin'));
    tenDN = userLogin.taiKhoan;
}

const stateDefault = {
    tenDangNhap: tenDN,
    matKhau: '',
    userChoice: 'ttcanhan',
    userSecondChoice: 'tttk',
}

export const NguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            state.tenDangNhap = action.tenDangNhap;
            state.matKhau = action.matKhau;
            return { ...state }
        }
        case 'THAY_DOI_LUA_CHON': {
            state.userChoice = action.userChoice;
            return { ...state }
        }
        case 'THAY_DOI_LUA_CHON_THU_HAI': {
            state.userSecondChoice = action.userSecondChoice;
            return { ...state }
        }
        default: return { ...state }
    }
}