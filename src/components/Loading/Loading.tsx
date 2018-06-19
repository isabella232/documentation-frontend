import * as React from "react";

import "./Loading.css";

export default class Loading extends React.Component {
    public render() {
        return (
            <div className="Content">
                <img className="BrandLogo" src={require("../../assets/images/logo_color.png")} />

                <div className="LoadingBar">
                    <div className="LoadingAnimation" />
                </div>
            </div>
        );
    }
}
