// External libraries
import * as React from "react";

// Component style
import "./Logo.css";

interface Props {
    src: string;
}

/**
 * A component that renders the Dharma logo.
 */
export default class Logo extends React.Component<Props, {}> {
    public render() {
        const { src } = this.props;

        return (
            <img className="HeaderLogo" src={src}/>
        );
    }
}
