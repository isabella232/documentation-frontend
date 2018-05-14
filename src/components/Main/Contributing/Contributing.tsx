// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import Snippet from "../Method/Snippet";

/**
 * A component that renders information about contributing to Dharma.js.
 */
export default class Contributing extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <a className="ContentAnchor" id="Contributing"/>

                <SemanticHeader size="huge">
                    Contributing
                </SemanticHeader>

                <SemanticHeader size="small" className="SectionTitle">
                    Dependencies
                </SemanticHeader>

                <SemanticHeader size="tiny">Install dependencies:</SemanticHeader>

                <Snippet lang="bash" code="yarn"/>

                <SemanticHeader size="tiny">Start testrpc and setup dependencies:</SemanticHeader>

                <Snippet lang="bash" code="yarn chain"/>

                <p>
                    Wait until the dependency migration complete message appears before
                    interacting with the contracts.
                </p>

                <SemanticHeader size="tiny">Testing</SemanticHeader>

                <Snippet lang="bash" code="yarn test:watch"/>
            </Container>
        );
    }
}
