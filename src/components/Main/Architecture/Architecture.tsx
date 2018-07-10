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
                <ContentAnchor id="ArchitectureIntroduction"/>
                <SemanticHeader size="huge" className="SectionTitle">
                    Architecture Overview
                </SemanticHeader>

                <div className="subsection">
                    <p>Dharma Protocol defines a procedure for issuing, funding, administering,
                        and trading debt assets using a set of smart contracts.</p>

                    <p>In the <em>broadcast debt order</em> model, a debtor will sign a debt order
                        specifying the parameters of a debt they want funded. An underwriter will
                        commit a risk rating to this order, and post it on a relayer's order book. A
                        creditor will fund the debt by filling the debt order. The <a
                            href="#ContractsDebtKernel">Debt Kernel</a> contract will issue a
                        tradable debt token (ERC721) to the creditor, and
                        store the details of the debt agreement in the <a
                            href="#ContractsDebtRegistry">Debt Registry</a> contract. The
                        debt kernel will transfer funds from the creditor to the borrower, and pay
                        relevant fees to the underwriter and relayer for their services.</p>

                    <p><em>Note:</em> The Debt Kernel makes all transfers via a <a
                        href="#ContractsTokenTransferProxy">Token Transfer Proxy</a> contract, so
                        that the creditor and debtor would not need to update their token
                        permissions in the case of a contract upgrade.</p>

                    <h3>Filling a Broadcast Debt Order</h3>
                    <img src={require("../../../assets/images/Broadcast-Debt-Order.png")}
                         style={{ width: "100%" }}/>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ContractsDebtKernel"/>
                    <SemanticHeader size="large">
                        <a href="https://github.com/dharmaprotocol/charta/blob/master/contracts/DebtKernel.sol">
                            DebtKernel.sol
                        </a>
                    </SemanticHeader>

                    <p>The debt kernel is a smart contract that contains business logic
                        associated with filling a debt order. This includes determining whether a
                        debt order is valid and consensual, minting a non-fungible
                        debt token and transferring it to the creditor, and transferring fees to the
                        appropriate relayer and underwriter.</p>

                    <p>The debt kernel also handles logic for cancelling an signed debt
                        order, so that a debtor can prevent a counterparty from filling it in the
                        future. Similarly, underwriters and relayers can use the debt kernel to
                        cancel an issuance that they have signed from being used in a debt order in
                        the future.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ContractsDebtRegistry"/>
                    <SemanticHeader size="large">
                        <a href="https://github.com/dharmaprotocol/charta/blob/master/contracts/DebtRegistry.sol">
                            DebtRegistry.sol
                        </a>
                    </SemanticHeader>

                    <p>The debt registry contains detailed information about each debt agreement,
                        including:</p>
                    <ul>
                        <li>The beneficiary of repayments</li>
                        <li>The address of the associated terms contract and the relevant
                            parameters for that contract
                        </li>
                        <li>The address of the underwriter</li>
                        <li>The underwriter's risk rating</li>
                        <li>The address of debt kernel contract used (referred to as its version)
                        </li>
                        <li>The block timestamp at issuance</li>
                    </ul>

                    <p>The debt registry also contains a mapping of each debtor to the list of debt
                        agreements.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="ContractsTokenTransferProxy"/>
                    <SemanticHeader size="large">
                        <a href="https://github.com/dharmaprotocol/charta/blob/master/contracts/TokenTransferProxy.sol">
                            TokenTransferProxy.sol
                        </a>
                    </SemanticHeader>

                    <p>This contract exists in order to transfer tokens (including principal, fees,
                        repayments, and collateral), on behalf of core Dharma Protocol contracts
                        such as the Debt Kernel. By decoupling contracts from transfers, the
                        core contracts can be upgraded without requiring users to grant new transfer
                        approvals to the new contract's address.</p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="UpgradeProcedure"/>
                    <SemanticHeader size="large">Upgrade Procedure</SemanticHeader>

                    <p>The Ethereum community is rapidly iterating on multiple layers of its
                        technology
                        stack, and hence protocols need to accommodate upgrades. Once a contract has
                        been deployed to the Ethereum blockchain, however, its internal logic cannot
                        be
                        changed, and so any changes to protocol logic requires completely new
                        contracts
                        to be deployed. Each time a new contract is deployed, other contracts and
                        accounts (including the protocol’s users) that make transfers through that
                        contract need to grant transfer approval - I.E. &quot;opt-in&quot; to using
                        that
                        contract.</p>
                    <p>To avoid disruptions to user experience during upgrades, Dharma Protocol uses
                        a &quot;proxy&quot; mechanism for token transfers. Specifically, a user
                        authorizes a simple proxy contract to make transfers with specified amounts
                        from
                        their account, and core Dharma Protocol contracts are authorized to invoke
                        those
                        transfers. When a core contract needs to be replaced, the old contract’s
                        proxy
                        permissions will be revoked, and a newly deployed contract will be
                        authorized to
                        make transfers through the proxy. However, this change will only go into
                        effect
                        if at least three of the five signatories in the Dharma Protocol <a
                            href="#ownership-management">multi-signature wallet</a> agree to the
                        change, and a “timelock” period of seven days has passed since the change
                        was
                        submitted.</p>
                    <p>The timelock is imposed to allow the Dharma community to view, contest, or
                        opt-out of any such changes if they do not agree that they are appropriate.
                        At
                        no time can the Dharma Protocol team make any changes to the logic of the
                        protocol within the timelock period, except to{" "}
                        <a href="#what-effects-pausing-certain-contracts-has-on-users">pause
                            the protocol</a> in the case of an emergency. Proposed changes are
                        broadcast
                        as events to the public blockchain at the time of proposal, before the
                        timelock
                        begins.</p>

                    <ContentAnchor id="how-disaster-recovery-will-be-handled"/>
                    <h3>Disaster Recovery</h3>
                    <p>The Dharma Protocol contracts have tested extensively, and independently
                        audited
                        and reviewed by three external auditors (Zeppelin, ZK Labs, and Trail of
                        Bits)
                        Even so, it is possible that vulnerabilities may surface in the protocol.
                        The
                        team has implemented a way to pause the procotcol in the case of
                        emergencies, to
                        prevent a situation where a hacker is able to exploit a known vulnerability.
                        The
                        signatories of Dharma’s multi-signature wallet, collectively are able to
                        pause
                        any the following Dharma Protocol contracts:</p>
                    <ul>
                        <li><p>DebtKernel</p>
                        </li>
                        <li><p>DebtRegistry</p>
                        </li>
                        <li><p>Collateralizer</p>
                        </li>
                        <li><p>RepaymentRouter</p>
                        </li>
                    </ul>
                    <p>The <em>pause</em> operation is the only function that the Dharma Protocol
                        can
                        invoke
                        immediately - all other functions require a timelock of seven days to elapse
                        before taking effect. Hence, once a fix has been made for the vulnerability,
                        the
                        protocol can only be <em>unpause</em> again after seven days have passed.
                        This
                        allows
                        Dharma community members to view and contest the fix, and, if necessary,
                        revoke
                        transfer allowances.</p>

                    <ContentAnchor id="what-effects-pausing-certain-contracts-has-on-users"/>
                    <h3>The Effect of
                        Pausing Contracts on Users</h3>
                    <p>The <em>pause</em> operation prevents the core functions in a contract from
                        further
                        execution. For example, if the Collateralizer contract is paused, users will
                        no
                        longer be able to return and seize collateral assets, or collateralize more
                        assets using the contract. In the case of the DebtKernel contract, a pause
                        would
                        mean that users are no longer allowed to fill debt orders, cancel debt
                        orders,
                        or cancel an issuance. The pause function is therefore a way to protect
                        assets
                        that might otherwise be at risk in the case of a vulnerability.</p>
                    <p>It is important to note that in the case of open orders, an inability to make
                        repayments due to a paused RepaymentRouter may result in delinquency.</p>
                    <p>Here is a list of functions that are will be paused, in the case of an
                        emergency,
                        for each contract:</p>
                    <ul>
                        <li>
                            DebtKernel
                            <ul>
                                <li>fillDebtOrder</li>
                                <li>cancelDebtOrder</li>
                                <li>cancelIssuance</li>
                            </ul>
                        </li>
                        <li>
                            DebtRegistry
                            <ul>
                                <li>insert</li>
                                <li>modifyBeneficiary</li>
                            </ul>
                        </li>
                        <li>
                            Collateralizer
                            <ul>
                                <li>seizeCollateral</li>
                                <li>collateralize</li>
                                <li>returnCollateral</li>
                            </ul>
                        </li>
                        <li>
                            RepaymentRouter
                            <ul>
                                <li>repay</li>
                            </ul>
                        </li>
                    </ul>

                    <ContentAnchor id="ownership-management"/>
                    <h3>Multisig Management</h3>
                    <p>We have deployed a 3-of-5 multi-signature wallet to be the owner of all
                        deployed
                        Dharma Protocol contracts. This means that there are five signatories who
                        can
                        submit or confirm a transaction as the owner of a Dharma Protocol contract,
                        and
                        that any such transaction will only be executed if at least 3 of the
                        signatories
                        confirm the transaction. All of the multi-signature wallet transactions,
                        with
                        the exception of the <em>pause</em> operation, are subject to a seven-day
                        timelock
                        following the majority confirmation.</p>
                    <ContentAnchor
                        id="what-the-capabilities-of-the-owners-are-short-term-and-long-term"/>
                    <h3>Contract Owner Capabilities</h3>
                    <p>The owner of the Dharma Protocol contracts, the multi-signature wallet,
                        cannot
                        directly control any assets or debt orders on the protocol. Its main
                        capabilities relate to pausing contracts in the case of an emergency, and
                        authorizing which contracts may execute functions on other contracts within
                        the
                        protocol. For example, the signatories may collectively vote to change which
                        contracts will be allowed to act as a transfer agent - to transfer funds
                        using
                        the transfer proxy. Currently this set of contracts include the
                        /RepaymentRouter/ (to transfer funds specified as loan repayments), the
                        /DebtKernel/ (to transfer principal from the creditor to the debtor, and
                        fees to
                        the underwriter and relayer), and the /Collateralizer/ (to transfer
                        collateral
                        to the Collateralizer contract.) If one of these contracts were to be
                        upgraded,
                        a new contract would be deployed and the signatories would vote on granting
                        that
                        contract the authorization to act as a transfer agent. If the majority of
                        the
                        signatories confirm that authorization, the update will occur following a
                        seven-day timelock.</p>
                    <p>The following functions are executable by the contract owner:</p>
                    <ul>
                        <li>
                            DebtKernel
                            <ul>
                                <li>setDebtToken</li>
                            </ul>
                        </li>
                        <li>
                            DebtToken
                            <ul>
                                <li>addAuthorizedMintAgent</li>
                                <li>revokeMintAgentAuthorization</li>
                                <li>addAuthorizedTokenURIAgent</li>
                                <li>revokeTokenURIAuthorization</li>
                            </ul>
                        </li>
                        <li>
                            Collateralizer
                            <ul>
                                <li>addAuthorizedCollateralizeAgent</li>
                                <li>revokeCollateralizeAuthorization</li>
                            </ul>
                        </li>
                        <li>
                            DebtRegistry
                            <ul>
                                <li>addAuthorizedInsertAgent</li>
                                <li>revokeInsertAgentAuthorization</li>
                                <li>addAuthorizedEditAgent</li>
                                <li>revokeEditAgentAuthorization</li>
                            </ul>
                        </li>
                        <li>
                            TokenRegistry
                            <ul>
                                <li>setTokenAttributes</li>
                            </ul>
                        </li>
                        <li>
                            TokenTransferProxy
                            <ul>
                                <li>addAuthorizedTransferAgent</li>
                                <li>revokeTransferAgentAuthorization</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 id="security-considerations">Security Considerations</h3>
                    <h4 id="static-token-address-assumptions">Static Token Address Assumptions</h4>
                    <p>Tokens on the Ethereum blockchain are upgradeable, in which case the address
                        or
                        symbol for that token may change. When token upgrades occur for supported
                        tokens, Dharma Protocol contracts that store those token attributes, such as
                        the
                        TokenRegistry, will need to be updated.</p>
                    <p>The TokenRegistry in Dharma Protocol provides a mapping of each supported
                        token’s
                        symbol to the address of that token. The Dharma team can update the stored
                        attributes for any supported token in the registry, including the token’s
                        address, and add new token symbols to the registry. However, like other
                        contract
                        upgrades, these changes invoke the seven-day time-lock. In the case of token
                        updates,
                        it is appropriate for the applications that use Dharma Protocol (e.g. Dharma
                        Plex), to signal to their users that the token has changed.</p>
                    <p>We have audited the Dharma Protocol and found no further cases where the
                        assumption has been made that a token’s attributes will remain fixed over
                        time.</p>
                </div>
            </Container>
        );
    }
}
