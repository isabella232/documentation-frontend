// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import Example from "./Example";
import Snippet from "./Snippet";

// Constants
import { REPO_URL } from "../../../config/constants";

interface Props {
    method: MethodDocumentation;
}

/**
 * A component that renders documentation for class methods.
 */
export default class Method extends React.Component<Props, {}> {
    public render() {
        const { method } = this.props;

        const name = method.name;

        return (
            <Container className="Method">
                <a className="ContentAnchor" id={name}/>

                <SemanticHeader>{name}</SemanticHeader>

                <p>{method.description}</p>

                <Snippet code={method.signature}/>

                {
                    // If the method has an example, render it as a snippet.
                    method.example && <Example code={method.example}/>
                }

                <a href={`${REPO_URL}${method.source}`}>Source</a>
            </Container>
        );
    }
}
