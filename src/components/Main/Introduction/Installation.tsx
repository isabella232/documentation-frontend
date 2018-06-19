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

                    <p>Instantiate a new Web3 object:</p>

                    <Snippet
                        lang="typescript"
                        code={`const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));`}/>

                    <p>Instantiate a new Dharma object with the web3 provider specified:</p>

                    <Snippet lang="typescript" code={`const dharma = new Dharma(web3.currentProvider);`}/>
                </div>
            </Container>
        );
    }
}
