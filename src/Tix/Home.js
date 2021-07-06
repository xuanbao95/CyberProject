import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import Cinema from "../component/Cinema";
import Footer from "../component/Footer";
import CircularProgressWithLabel from "../component/Loading"
import ListCarousel from "../component/ListCarousel";

import ListMovie from "../component/ListMovie";
import SearchBar from "../component/SearchBar";
import CinemaListComponent from "../component/cinemaList"
import Section_1 from "../component/Section_1";
import IntroduceApp from "../component/introduceApp"
import NavBars from "../component/NavBars";
import HeaderComponent from "../component/header";
import LineComponent from "../component/line";



class Home extends Component {
  render() {
    return (
      <div>
        {/* <NavBars /> */}
        <HeaderComponent center="home"></HeaderComponent>
        <ListCarousel />
        <SearchBar />
        <ListMovie />
        <LineComponent></LineComponent>
        <CinemaListComponent />
        <Section_1 />
        <IntroduceApp />
        <Footer />
      </div>
    );
  }
}

export default Home;
