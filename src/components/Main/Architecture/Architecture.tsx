// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";

/**
 * A component that renders an overview of architecture to the documentation.
 */
export default class Architecture extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <SemanticHeader size="huge" className="SectionTitle">
                    Architecture
                </SemanticHeader>

                <p>Introduction and diagram</p>

                <div className="subsection">
                    <ContentAnchor id="ArchitectureIntroduction"/>
                    <SemanticHeader size="large">Introduction</SemanticHeader>

                    <p>Introduction to overview of architecture.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ContractsDebtKernel"/>
                    <SemanticHeader size="large">DebtKernel.sol</SemanticHeader>

                </div>

                <div className="subsection">
                    <ContentAnchor id="ContractsDebtRegistry"/>
                    <SemanticHeader size="large">DebtRegistry.sol</SemanticHeader>

                </div>

                <div className="subsection">
                    <ContentAnchor id="ContractsTokenTransferProxy"/>
                    <SemanticHeader size="large">TokenTransferProxy.sol</SemanticHeader>

                </div>
            </Container>
        );
    }
}
