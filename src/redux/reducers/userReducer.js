import * as ActionType from "../constants/ActionType";


let initialState = {
    listUser: [],
    detailUser: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.ActionType) {
        case ActionType.GET_LIST_USER:
            state.listUser = action.data
            return { ...state }
        case ActionType.POST_DETAIL_USER:
            state.detailUser = action.data;
            return { ...state }
        default:
            return { ...state }
    }
}
export default userReducer;