import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserRightChoiceContent from './userRightChoiceContent';
import UserRightMultiChoice from './userRightMultiChoice';
import AdminQLND from './adminQLND';
import AdminDSP from './adminDSP';

import UserVDD from './userVDD';

export default function AdminRightComponent() {
    let admin = useSelector(state => state.AdminReducer);
    // console.log(user);
    return (
        <div className="col-10 user-right">
            {(admin.adminChoice == 'qlnd' ?
                <Container className="pt-5">
                    <div className="row">
                        <AdminQLND></AdminQLND>
                    </div>
                </Container>
                :
                <AdminDSP></AdminDSP>
            )}
        </div>
    )
}