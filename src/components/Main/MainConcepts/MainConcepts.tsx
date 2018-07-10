// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";

/**
 * A component that renders main concepts to the documentation.
 */
export default class MainConcepts extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <SemanticHeader size="huge" className="SectionTitle">
                    Main Concepts
                </SemanticHeader>

                <div className="subsection">
                    <ContentAnchor id="ConceptDebtOrder"/>
                    <SemanticHeader size="large">Debt Order</SemanticHeader>

                    <p>Debt orders are data packets listed by relayers that are the fundamental
                        primitive of Dharma protocol -- submitting a valid debt order to the Debt
                        Kernel triggers the issuance of a debt token and its swap with the requested
                        principal amount. Dharma protocol is agnostic to the means by which
                        creditors, debtors, underwriters, and relayers communicate and transfer debt
                        order packets between one another -- A debt order can have up to 3 ECDSA
                        signatures attached to it -- a debtor's signature, a creditor's signature,
                        and an underwriter's signature.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ConceptTermsContract"/>
                    <SemanticHeader size="large">Terms Contract</SemanticHeader>

                    <p>We require that any Debt issued via Dharma protocol commit to a smart
                        contract, referred to as a Terms Contract. The purpose of the Terms Contract
                        is to provide an immutable and programmatically queryable source-of-truth
                        revealing the repayment status of the debt. This allows us to empirically
                        and unambiguously both define the terms repayment scheme in the Debt
                        Issuance process and evaluate the debt's repayment status during the debt's
                        lifecycle both on and off-chain.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ConceptDebtToken"/>
                    <SemanticHeader size="large">Debt Token</SemanticHeader>

                    <p>A Dharma Debt Token is a non-fungible token that a creditor receives when
                        filling a loan. Future repayments on the loan go to the owner of the Debt
                        Token.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ConceptRelayer"/>
                    <SemanticHeader size="large">Relayer</SemanticHeader>

                    <p>Relayers in Dharma protocol perform an analogous function to relayers in the
                        0x Protocol -- namely, relayers aggregate signed debt order messages and,
                        for an agreed upon fee, host the messages in a centralized order book and
                        provide retail investors with the ability to invest in the requested debt
                        orders by filling the signed debt orders. Note that, similarly to the 0x
                        relaying mechanism, Dharma Protocol relayers need not hold any agent's
                        tokens -- they simply provide a mechanism for creditors to browse through
                        aggregated signed debt order messages, which creditors can use to
                        trustlessly issue themselves debt tokens in exchange for the requested
                        principal via client-side contract interactions (this mechanism is specified
                        later in this paper). The primary differences between relayers in Dharma
                        protocol and 0x are:</p>

                    <ol>
                        <li>Dharma protocol relayers are not hosting a secondary market order book,
                            but rather, an order book containing requests for debts that have yet to
                            be issued
                        </li>
                        <li>Dharma protocol relayers provide creditors with signed debt-specific
                            metadata associated with the debt order messages and their accompanying
                            underwriter so that they can make informed investment decisions about
                            the risk profile of a given debt order.
                        </li>
                        <li>Dharma protocol relayers do not freely allow any anonymous party to
                            publish signed debt orders on to their order book, and use their
                            discretion to only accept signed debt orders from known, trusted
                            underwriters.
                        </li>
                    </ol>

                    <blockquote>
                        <p>Example: Bob wants to build a retail loan investor portal through which
                            users can invest in a variety of debt assets -- a Kayak for peer-to-peer
                            loans, if you will. Bob becomes a Dharma protocol relayer by setting up
                            an online order book, building a retail investment platform, and
                            allowing investors to browse through debt requests and examine
                            associated data pertaining to the debtors' credit worthiness and the
                            identity of the backing underwriters. Since Bob has seen that the
                            empirical historical performance of Alice's attested assets has been in
                            line with her predictions and knows that Alice's company is a publicly
                            trusted and regulated entity, Bob allows Alice to broadcast signed debt
                            orders onto his order book. When a debt order is filled on his platform,
                            Bob is paid out a fee stipulated in the signed debt order. </p>
                    </blockquote>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ConceptUnderwriter"/>
                    <SemanticHeader size="large">Underwriter</SemanticHeader>

                    <p>In traditional debt markets, underwriters are entities that collect fees for
                        administering the public issuance of debt and pricing borrower default risk
                        into the asset. In Dharma protocol, this definition is expanded and
                        formalized. <strong>An underwriter is a <em>trusted</em> entity that
                            collects market-determined fees for performing the following functions:</strong>
                    </p>

                    <ul>
                        <li>Originating a debt order from a borrower</li>
                        <li>Determining and negotiating the terms of the debt (i.e. term length,
                            interest, amortization) with the potential debtor
                        </li>
                        <li>Cryptographically committing to the likelihood they ascribe to that debt
                            relationship ending in default
                        </li>
                        <li>Administering the debt order's funding by forwarding it to any number of
                            relayers.
                        </li>
                        <li>Servicing the debt -- i.e. doing everything in the underwriter's
                            reasonable power to ensure timely repayment according to the agreed upon
                            terms
                        </li>
                        <li>In the case of defaults or delinquencies, collecting on collateral (if
                            debt is secured) or the individual's assets via legal mechanisms and
                            passing collected proceeds to investors
                        </li>
                    </ul>

                    <p>This is not particularly out of band with what most online lenders do in
                        their day-to-day underwriting and servicing operations. We foresee Dharma
                        protocol facilitating an alternative, cheaper route for aspiring online
                        lending platforms to bootstrap their operations and earn similar margins as
                        they would in the status quo by becoming an underwriter -- all-the-while
                        never holding balance sheet risk and avoiding the upfront time and capital
                        costs associated with raising the requisite debt vehicles from traditional
                        investors.</p>

                    <blockquote>
                        <p>Example: Alice has a novel thesis on how to originate, underwrite, and
                            service loans to aspiring ZCash miners who need significant upfront
                            capital to buy GPUs on bulk. In lieu of knocking on the doors of
                            traditional fixed-income investors, Alice decides to become an
                            underwriter in Dharma protocol. She obtains the necessary lending
                            licenses, sets up a website advertising lending services for miners, and
                            drums up hype in the ZCash community for her credit product. When
                            borrowers come to her site, their creditworthiness is automatically
                            scored by Alice's proprietary technology and they are presented with the
                            terms of the loan, as determined by Alice. Upon acceptance of the terms,
                            Alice cryptographically attests to the borrower's likelihood of default,
                            forwards the signed debt order to a relayer, and, upon the loan's
                            funding, collects her desired fee. The entire flow of funds is
                            transparently auditable on-chain, and Alice's competence in servicing
                            and collecting on the debt can be empirically determined ex post
                            facto.</p>
                    </blockquote>
                </div>
            </Container>
        );
    }
}
