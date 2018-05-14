// External libraries
import * as React from "react";

interface Props {
    id: string;
}

/**
 * A component that renders an anchor for navigation linking.
 */
export default class ContentAnchor extends React.Component<Props, {}> {
    public render() {
        const { id } = this.props;

        return <span className="ContentAnchor" id={id}/>;
    }
}
