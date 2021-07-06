import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
const HomLayout = (props) => {
    return <Fragment>{props.children}</Fragment>;
};
export default function HomeTemPlate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <HomLayout>
                    <Component {...propsComponent} />
                </HomLayout>
            )}
        />
    );
}