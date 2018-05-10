// External libraries
import * as React from "react";

// Semantic-UI components
import { Header as SemanticHeader } from "semantic-ui-react";

// Components
import Snippet from "./Snippet";

interface Props {
    code: string;
}

/**
 * A component that renders documentation for class methods.
 */
export default class Example extends React.Component<Props, {}> {
    public render() {
        const { code } = this.props;

        return (
            <div>
                <SemanticHeader size="small">Example</SemanticHeader>
                <Snippet code={code}/>
            </div>
        );
    }
}
