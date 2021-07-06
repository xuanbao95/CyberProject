import * as ActionType from "../constants/ActionType";
let initialState = {
  listMovie: [],
  listMovieShowTime: [],
  listTheater: [],
  listDetail: [],
  // loadTable
  listChair: [],
  er: null
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    case ActionType.GET_LIST_SHOW_TIME:
      state.listMovieShowTime = action.data;
      return { ...state }
    case ActionType.GET_LIST_THEATER:
      state.listTheater = action.data;
      return { ...state }

    case ActionType.GET_DETAIL_MOVIE:
      state.listDetail = action.data;
      return { ...state };
    case ActionType.GET_LIST_CHAIR_BOOKING:
      state.listChair = action.data;
      return { ...state }
    case "STRARBOOKING":
      state.listChair = [];
      return { ...state }
    case "ENDBOOKING":
      state.listChair = [];
      state.er = action.data
      return { ...state }
    default:
      return { ...state };
  }
};
export default movieReducer;
