const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'asd', soDienThoai: '1234', email: 'lmao@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'aaaaaaa', soDienThoai: '5677', email: 'lmao2@gmail.com' }
    ],

    sinhVienSua: {
        maSinhVien: '',
        tenSinhVien: '',
        soDienThoai: '',
        email: '',
    }

}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN':
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state };
        case 'XOA_SINH_VIEN':
            state.mangSinhVien = [...state.mangSinhVien.filter(sv => sv.maSinhVien != action.maSinhVien)];
            return { ...state };
        case 'SUA_SINH_VIEN':
            state.sinhVienSua = action.sinhVienSua;
            return { ...state };
        case 'CAP_NHAT_SINH_VIEN':
            let mangSV = [...state.mangSinhVien];
            let sinhVienCapNhat = mangSV.find(sinhVien => sinhVien.maSinhVien === action.sinhVienCapNhat.maSinhVien);
            if (sinhVienCapNhat) {
                sinhVienCapNhat.email = action.sinhVienCapNhat.email;
                sinhVienCapNhat.tenSinhVien = action.sinhVienCapNhat.tenSinhVien;
                sinhVienCapNhat.soDienThoai = action.sinhVienCapNhat.soDienThoai;
            }
            state.mangSinhVien = mangSV;
            return { ...state };

        default:
            return state
    }
}

