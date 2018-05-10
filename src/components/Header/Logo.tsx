import * as React from "react";

import "./Logo.css";

interface Props {
    src: string;
}

export default class Logo extends React.Component<Props, {}> {
    public render() {
        const { src } = this.props;

        return (
            <img className="HeaderLogo" src={src}/>
        );
    }
}
