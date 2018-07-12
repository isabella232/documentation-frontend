// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";
import Snippet from "../Method/Snippet";

/**
 * A component that renders documentation about the Loan API.
 */
export default class LoanAPI extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <ContentAnchor id="LoanAPI" />

                <SemanticHeader size="huge" className="SectionTitle">
                    Loan API
                </SemanticHeader>

                {/* makeRepayment */}

                <ContentAnchor id="LoanRepay" />

                <SemanticHeader size="large">Making Repayments</SemanticHeader>

                <p>
                    If the debtor has sufficient balance, they can make a repayment using the
                    `makeRepayment` method:
                </p>

                <Snippet lang="JS" code={`const txHash = await loan.makeRepayment();`} />

                {/* getTotalExpectedRepaymentAmount */}

                <ContentAnchor id="LoanGetRepaymentAmount" />

                <SemanticHeader size="large">
                    Getting the Total Expected Repayment Amount
                </SemanticHeader>

                <p>
                    To find out what the total expected repayment amount is for a given Loan, use
                    the `getTotalExpectedRepaymentAmount` method:
                </p>

                <Snippet
                    lang="JS"
                    code="const repaymentAmount = await loan.getTotalExpectedRepaymentAmount();"
                />

                {/* getOutstandingAmount */}

                <ContentAnchor id="LoanGetOutstandingAmount" />

                <SemanticHeader size="large">Get Outstanding Amount</SemanticHeader>

                <p>
                    Retrieve the amount outstanding on the loan by calling the
                    `getOutstandingAmount` method:
                </p>

                <Snippet lang="JS" code="const txHash = await loan.getOutstandingAmount();" />

                {/* getRepaidAmount */}

                <ContentAnchor id="LoanGetRepaidAmount" />

                <SemanticHeader size="large">Get Repaid Amount</SemanticHeader>

                <p>
                    Retrieve the amount repaid on the loan by calling the `getRepaidAmount` method:
                </p>

                <Snippet lang="JS" code="const txHash = await loan.getRepaidAmount();" />

                {/* seizeCollateral */}

                <ContentAnchor id="LoanSeize" />

                <SemanticHeader size="large">Seizing Collateral</SemanticHeader>

                <p>
                    If the Loan is in default (because the debtor failed to make expected
                    repayments), the collateral becomes available for seizure by the creditor:
                </p>

                <Snippet lang="JS" code="const txHash = await loan.seizeCollateral();" />

                {/* returnCollateral */}

                <ContentAnchor id="LoanReturn" />

                <SemanticHeader size="large">Returning Collateral</SemanticHeader>

                <p>
                    If the debtor has repaid the total expected repayment amount, they may reclaim
                    their collateral by calling the `returnCollateral` method:
                </p>

                <Snippet lang="JS" code="const txHash = await loan.returnCollateral();" />
            </Container>
        );
    }
}
