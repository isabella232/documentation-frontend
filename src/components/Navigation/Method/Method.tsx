// External libraries
import * as React from "react";

interface Props {
    id: string;
    name: string;
}

/**
 * A component that renders a link to a method's documentation.
 */
export default class Method extends React.Component<Props, {}> {
    public render() {
        const { name, id } = this.props;

        return (
            <a className="MethodName item link" href={`#${id}`}>
                {name}
            </a>
        );
    }
}
