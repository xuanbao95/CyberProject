import React from 'react'

import UserLeftComponent from './body/userLeftComponent'
import UserRightComponent from './body/userRightComponent'
import AdminLeftComponent from './body/adminLeftComponent'
import AdminRightComponent from './body/adminRightComponent'

export default function Body(props) {
    let page = props.page;
    switch (page) {
        case 'home': {
            return (
                <div>

                </div>
            )
        }
        case 'user': {
            return (
                <div className="row user" style={{ width: '100%' }}>
                    <UserLeftComponent></UserLeftComponent>
                    <UserRightComponent></UserRightComponent>
                </div>
            )
        }
        case 'admin': {
            return (
                <div className="row user" style={{ width: '100%' }}>
                    <AdminLeftComponent></AdminLeftComponent>
                    <AdminRightComponent></AdminRightComponent>
                </div>
            )
        }
        default: return <div></div>
    }

}
