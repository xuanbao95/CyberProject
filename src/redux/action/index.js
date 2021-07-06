import Axios from "axios";
import * as ActionType from "../constants/ActionType";
//  get list movie
export const actGetListMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06",
    })
      .then((rs) => {
        dispatch(actGetListMovie(rs.data));
      })
      .catch((err) => { });
  };
};

export const actGetListMovie = (listMovie) => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie,
  };
};



// lấy danh sách cụm rạp

export const actGetInformationShowTimeAPI = (idMovie) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`
    }).then((rs) => {
      dispatch(actGetInformationShowTime(rs.data))
    }).catch((err) => {
      console.log(err.response.data);
    })
  }
}
export const actGetInformationShowTime = (listShowTime) => {
  return {
    type: ActionType.GET_LIST_SHOW_TIME,
    data: listShowTime
  }
}
export const actGetListSystemTheaterAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=cgv"
    }).then((rs) => {
      dispatch(actGetInformationShowTime(rs.data))
    }).catch((err) => {
      console.log(err.response.data);
    })
  }
}
export const actGetListSystemTheater = (listTheater) => {
  return {
    type: ActionType.GET_LIST_THEATER,
    data: listTheater
  }
}

export const actGetDetailMovieAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((rs) => {
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };
};
export const actGetDetailMovie = (detailMovie) => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: detailMovie,
  };
};

export const actGetListBookingAPI = (id) => {
  return (dispatch) => {
    // dispatch(actGetListDetailMovieStarBooking())
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    }).then((rs) => {
      dispatch(actGetListChairBooking(rs.data))
    }).catch((er) => {
      console.log(er.response.data)
    })
  }
}
export const actGetListChairBooking = (listChair) => {
  return {
    type: ActionType.GET_LIST_CHAIR_BOOKING,
    data: listChair
  }
}

export const actGetListDetailMovieStarBooking = () => {
  return {
    type: "STRARBOOKING",

  }
}
export const actGetListDetailMovieEndBooking = (message) => {
  return {
    type: "ENDBOOKING",
    data: message
  }
}