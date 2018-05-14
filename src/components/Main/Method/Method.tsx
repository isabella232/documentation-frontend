// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";
import SectionLink from "../SectionLink";
import Example from "./Example";
import Interfaces from "./Interfaces";
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
                <ContentAnchor id={name}/>

                <SemanticHeader>{name} <SectionLink id={name}/></SemanticHeader>

                {
                    method.description && method.description.split("\n\n").map((line) => {
                        return <p>{line}</p>;
                    })
                }

                <Snippet code={method.signature}/>

                {
                    // If the method has an example, render it as a snippet.
                    method.example && <Example code={method.example}/>
                }

                <a href={`${REPO_URL}${method.source}`}>Source</a>

                <Interfaces interfaceNames={method.interfaces}/>
            </Container>
        );
    }
}
