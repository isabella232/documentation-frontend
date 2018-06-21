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
export default class DebtOrderAPI extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <ContentAnchor id="DebtOrderAPI"/>

                <SemanticHeader size="huge" className="SectionTitle">
                    Introduction
                </SemanticHeader>

                <ContentAnchor id="DebtOrderInstantiation"/>

                <SemanticHeader size="large">Opening a DebtOrder</SemanticHeader>

                <p>Open a debt order by specifying the terms of the agreement:</p>

                <Snippet lang="JS" code={`const order = await DebtOrder.create(dharma, {
    principalAmount: 5,
    principalToken: "WETH",
    collateralAmount: 100,
    collateralToken: "REP",
    interestRate: 12.3,
    termDuration: 6,
    termUnit: "months",
    debtorAddress: "0xd2f45e02ab7b190ac9a87b743eab4c8f2ed0e491",
    expiresInDuration: 5,
    expiresInUnit: "days",
});`}/>

                <ContentAnchor id="DebtOrderCancel"/>

                <SemanticHeader size="large">Cancelling an Open DebtOrder</SemanticHeader>

                <p>Only the debtor who opened the DebtOrder can cancel that order.
                    To cancel the order, call the `cancelAsDebtor` method:</p>

                <Snippet lang="JS"
                         code="const transactionHash = await debtOrder.cancelAsDebtor();"/>

                <p>After cancelling, you might want to wait for the next transaction to be mined
                on the Ethereum blockchain:</p>

                <Snippet lang="JS"
                         code="await dharma.blockchain.awaitTransactionMinedAsync(transactionHash);"/>

                <ContentAnchor id="DebtOrderFill"/>

                <SemanticHeader size="large">Filling an Open DebtOrder</SemanticHeader>

                <p>Any creditor with sufficient balance of the principal token can fill an
                open DebtOrder. Use the `fillAsCreditor` method:</p>

                <Snippet lang="JS"
                         code={`const transactionHash = await debtOrder.fillAsCreditor(
    new EthereumAddress("0xd2f45e02ab7b190ac9a87b743eab4c8f2ed0e491");
);`}/>

                <p>After filling the DebtOrder, you might want to wait for the next transaction to be mined
                    on the Ethereum blockchain:</p>

                <Snippet lang="JS"
                         code="await dharma.blockchain.awaitTransactionMinedAsync(transactionHash);"/>

                <ContentAnchor id="DebtOrderRepay"/>

                <SemanticHeader size="large">Making Repayments</SemanticHeader>

                <p>If the debtor has sufficient balance, they can make a repayment using the
                    `makeRepayment` method:</p>

                <Snippet lang="JS"
                         code={`const transactionHash = await debtOrder.makeRepayment(
    new TokenAmount(1, "REP"),
);
`}/>
                <p>Again, you might want to wait for the next transaction to be mined on the
                    Ethereum blockchain:</p>

                <Snippet lang="JS"
                         code="await dharma.blockchain.awaitTransactionMinedAsync(transactionHash);"/>

                <ContentAnchor id="DebtOrderGetRepaymentAmount"/>

                <SemanticHeader size="large">
                    Getting the Total Expected Repayment Amount
                </SemanticHeader>

                <p>To find out what the total expected repayment amount is for a given DebtOrder,
                use the `getTotalExpectedRepaymentAmount` method:</p>

                <Snippet lang="JS"
                         code="const repaymentAmount = await debtOrder.getTotalExpectedRepaymentAmount();"/>

                <ContentAnchor id="DebtOrderSeize"/>

                <SemanticHeader size="large">
                    Seizing Collateral
                </SemanticHeader>

                <p>If the DebtOrder is in default (because the debtor failed to make expected
                repayments), the collateral becomes available for seizure by the creditor:</p>

                <Snippet lang="JS"
                         code="const transactionHash = await debtOrder.seizeCollateral();"/>

                <p>Wait for the next transaction to be mined:</p>

                <Snippet lang="JS"
                         code="await dharma.blockchain.awaitTransactionMinedAsync(transactionHash);"/>

                <ContentAnchor id="DebtOrderReturn"/>

                <SemanticHeader size="large">
                    Returning Collateral
                </SemanticHeader>

                <p>If the debtor has repaid the total expected repayment amount, they may reclaim
                their collateral:</p>

                <Snippet lang="JS"
                         code="const transactionHash = await debtOrder.returnCollateral();"/>

                <p>Wait for the next transaction to be mined:</p>

                <Snippet lang="JS"
                         code="await dharma.blockchain.awaitTransactionMinedAsync(transactionHash);"/>
            </Container>
        );
    }
}
