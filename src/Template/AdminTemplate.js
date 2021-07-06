import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom'
// import { LoadingReducer } from '../redux/Reducers/LoadingReducer';
import HeaderComponent from '../component/header';
import Body from '../component/body';
import ListCarousel from '../component/ListCarousel';
import SearchBar from '../component/SearchBar';
import ListMovie from '../component/ListMovie';
import CinemaListComponent from '../component/cinemaList';
import Section_1 from '../component/Section_1';
import IntroduceApp from '../component/introduceApp';
import Footer from '../component/Footer';
// import CarouselBanner from '../components/body/carouselBanner';

export default function AdminTemplate(props) { //props co the la obj, arr, str, num, func, component

    //sau này có thể chèn hook ở đây
    // const { isLoading } = useSelector(state => state.LoadingReducer)
    const { component, path } = props;
    const dispatch = useDispatch();
    // useEffect(() => {
    //     setTimeout(() => { dispatch({ type: 'HIDE_LOADING' }) }, 2000)
    //     return () => {
    //         dispatch({ type: 'DISPLAY_LOADING' })
    //     }
    // })
    // console.log(isLoading);
    // const renderLoading = () => {
    //     if (isLoading) {
    //         return <div style={{ position: 'fixed', zIndex: 100, width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
    //             <div className="text-white d-flex flex-column align-item-center justify-content-center w-100 h-100">
    //                 Loading...
    //             </div>
    //         </div>
    //     }
    // }

    if (JSON.parse(localStorage.getItem('userlogin'))?.maLoaiNguoiDung == 'QuanTri') {
        return (
            <Fragment>
                {/* {renderLoading()} */}
                <HeaderComponent center="admin"></HeaderComponent>
                <Body page="admin"></Body>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                {/* {renderLoading()} */}
                <HeaderComponent center="home"></HeaderComponent>
                <ListCarousel />
                <SearchBar />
                <ListMovie />
                <CinemaListComponent />
                <Section_1 />
                <IntroduceApp />
                <Footer />
            </Fragment>
        )
    }
}
