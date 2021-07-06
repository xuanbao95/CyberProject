import React from 'react'
// import DetailMovie from './component/DetailMovie';

const Home = React.lazy(() => {
    return new Promise((resolve => {
        setTimeout(() => resolve(import("./Tix/Home")), 3000)
    }));
});
const DetailMovie = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./component/DetailMovie")), 3000);
    });
});
const Form = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./component/Form")), 3000);
    });
});
const Booking = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./component/TicketBooking.js")), 3000);
    });
});

const routerHome = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/detailMovie/:id",
        exact: false,
        component: DetailMovie,
    },
    {
        path: "/form",
        exact: false,
        component: Form,
    },
    {
        path: "/booking/:idLichChieu",
        exact: false,
        component: Booking,
    }
]


export { routerHome };