import React from 'react'
import CenterHeaderComponent from './header/center'
import LeftHeaderComponent from './header/left'
import RightHeaderComponent from './header/right'
import ModalComponent from './ModalComponent'

export default function HeaderComponent(props) {
    let center = props.center;

    return (
        <nav id="myHeader" className="navbar navbar-expand navbar-light bg-light " style={{ zIndex: 1 }}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <LeftHeaderComponent></LeftHeaderComponent>
                <CenterHeaderComponent center={center}></CenterHeaderComponent>
                <RightHeaderComponent></RightHeaderComponent>
            </div>
        </nav>
    )
}
