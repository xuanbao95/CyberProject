import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
export default function BookingInfo(props) {

    const [seconds, setSeconds] = useState(120000);
    let history = useHistory();
    useEffect(() => {
        if (seconds > 0) {
            let interval = setInterval(() => {
                setSeconds(seconds - 1000);
            }, 1000);
            return () => clearInterval(interval)
        } else {
            Swal.fire("hết thời gian đặt vế", "nhấn ok để thoát", "erro");
            setTimeout(() => {
                history.replace("/")
            }, 3000)
        }
    })
    // console.log(1);
    let milisToMinutesAndSeconds = (mili) => {
        let minutes = Math.floor(mili / 60000)
        let seconds = ((mili % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    let renderFilmInfo = () => {
        let { FilmInfo } = props
        console.log(props);
        if (FilmInfo) {
            return (
                <div>
                    <div className="seatCheckOut__header">
                        <div className="seatCheckOut__leftTitle">
                            <div className="seatCheckOut__contentCinema">
                                <p className="seatCheckOut__address">{FilmInfo.tenCumRap}</p>
                                <p className="seatCheckOut__hour">
                                    - {FilmInfo.gioChieu} - {FilmInfo.tenRap}
                                </p>
                            </div>
                        </div>
                        <div classname="seatCheckOut__rightTitle">
                            <div classname="seatCheckOut__info1">
                                {milisToMinutesAndSeconds(seconds)}
                            </div>
                        </div>
                    </div>
                </div>

            )
        }


    }
    return (
        <div>
            {renderFilmInfo()}
        </div>
    )
}
