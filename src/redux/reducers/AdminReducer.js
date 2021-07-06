const stateDefault = {
    adminChoice: 'qlnd',
    // adminSecondChoice: 'qlp',
}

export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THAY_DOI_LUA_CHON': {
            state.adminChoice = action.adminChoice;
            return { ...state }
        }
        // case 'THAY_DOI_LUA_CHON_THU_HAI': {
        //     state.adminSecondChoice = action.adminSecondChoice;
        //     return { ...state }
        // }
        default: return { ...state }
    }
}