import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserRightChoiceContent from './userRightChoiceContent';
import UserRightMultiChoice from './userRightMultiChoice';
import UserVDD from './userVDD';

export default function UserRightComponent() {
    let user = useSelector(state => state.NguoiDungReducer);
    // console.log(user);
    return (
        <div className="col-10 user-right">
            {(user.userChoice == 'ttcanhan' ?
                <Container className="pt-5">
                    <div className="row">
                        <UserRightMultiChoice></UserRightMultiChoice>
                        <UserRightChoiceContent></UserRightChoiceContent>
                    </div>
                </Container>
                :
                <UserVDD></UserVDD>
            )}
        </div>
    )
}