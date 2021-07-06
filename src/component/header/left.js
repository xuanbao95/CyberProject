
import React from 'react'
import logo from '../../images/img/web-logo.png'
import { Link } from "react-router-dom";

export default function LeftHeaderComponent() {
    return (
        <div className="left pl-5">
            <Link href="" to={`/`}>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt />
                </a>
            </Link>
        </div>
    )
}
