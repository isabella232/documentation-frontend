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
export default class Installation extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <SemanticHeader size="huge" className="SectionTitle">
                    Installation
                </SemanticHeader>

                <div className="subsection">
                    <ContentAnchor id="Installation"/>
                    <SemanticHeader size="large">Installing Dharma.js</SemanticHeader>

                    <p>Add Dharma.js to your project using yarn:</p>

                    <Snippet lang="bash" code="yarn add @dharmaprotocol/dharma.js"/>

                    <p>Alternatively, add Dharma.js to your project using npm:</p>

                    <Snippet lang="bash" code="npm install @dharmaprotocol/dharma.js --save"/>
                </div>

                <div className="subsection">
                    <ContentAnchor id="Import"/>
                    <SemanticHeader size="large">Importing Dharma.js</SemanticHeader>

                    <p>Include Dharma.js in your project code using ES6 style imports (recommended):</p>

                    <Snippet lang="typescript" code={`import Dharma from "@dharmaprotocol/dharma.js";`}/>

                    <p>Alternatively, include Dharma.js in your project code using <em>require</em> syntax:</p>

                    <Snippet lang="typescript" code={`const Dharma = require("@dharmaprotocol/dharma.js");`}/>
                </div>

                <div className="subsection">
                    <ContentAnchor id="Instantiation"/>
                    <SemanticHeader size="large">Instantiating Dharma.js</SemanticHeader>

                    <p>
                        Instantiate a new Dharma object. If you need to specify the location of
                        a blockchain node, you can pass that in as a parameter:
                    </p>

                    <Snippet lang="typescript" code={`const dharma = new Dharma("http://localhost:8545");`}/>

                    <p>If your app relies on an injected web3 instance from the browser, then you
                    don't need to pass a host:</p>

                    <Snippet lang="typescript" code={`const dharma = new Dharma();`}/>
                </div>
            </Container>
        );
    }
}
