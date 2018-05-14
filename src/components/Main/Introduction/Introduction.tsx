// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";
import Snippet from "../Method/Snippet";
/**
 * A component that renders an introduction to the documentation.
 */
export default class Introduction extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <ContentAnchor id="Introduction"/>

                <SemanticHeader size="huge" className="SectionTitle">
                    Introduction
                </SemanticHeader>

                <SemanticHeader size="tiny">Installing Dharma.js</SemanticHeader>

                <p>Add Dharma.js to your project using yarn:</p>

                <Snippet lang="bash" code="yarn add @dharmaprotocol/dharma.js"/>

                <p>Alternatively, add Dharma.js to your project using npm:</p>

                <Snippet lang="bash" code="npm install @dharmaprotocol/dharma.js --save"/>

                Include Dharma.js into your project code using ES6 style imports (recommended):

                <Snippet lang="typescript" code={`import Dharma from "@dharmaprotocol/dharma.js";

const dharma = new Dharma(web3.currentProvider);`}/>
            </Container>
        );
    }
}
