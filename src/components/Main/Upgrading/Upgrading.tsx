// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";
import SectionLink from "../SectionLink";
/**
 * A component that renders an introduction to the documentation.
 */
export default class Upgrading extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <ContentAnchor id="Upgrading"/>

                <SemanticHeader size="huge" className="SectionTitle">
                    Upgrade Procedures
                    <SectionLink id="Upgrading"/>
                </SemanticHeader>

                <p>Performing upgrades
                    The Ethereum community is rapidly iterating on multiple layers of its technology
                    stack, and hence protocols need to accommodate upgrades. Once a contract has
                    been deployed to the Ethereum blockchain, however, its internal logic cannot be
                    changed, and so any changes to protocol logic requires completely new contracts
                    to be deployed. Each time a new contract is deployed, other contracts and
                    accounts (including the protocol’s users) that make transfers through that
                    contract need to grant transfer approval - I.E. &quot;opt-in&quot; to using that
                    contract.</p>
                <p>To avoid disruptions to user experience during upgrades, Dharma Protocol uses
                    a &quot;proxy&quot; mechanism for token transfers. Specifically, a user
                    authorizes a simple proxy contract to make transfers with specified amounts from
                    their account, and core Dharma Protocol contracts are authorized to invoke those
                    transfers. When a core contract needs to be replaced, the old contract’s proxy
                    permissions will be revoked, and a newly deployed contract will be authorized to
                    make transfers through the proxy. However, this change will only go into effect
                    if at least three of the five signatories in the Dharma Protocol <a
                        href="#ownership-management">multi-signature wallet</a> agree to the
                    change, and a “timelock” period of seven days has passed since the change was
                    submitted.</p>
                <p>The timelock is imposed to allow the Dharma community to view, contest, or
                    opt-out of any such changes if they do not agree that they are appropriate. At
                    no time can the Dharma Protocol team make any changes to the logic of the
                    protocol within the timelock period, except to{" "}
                    <a href="#what-effects-pausing-certain-contracts-has-on-users">pause
                        the protocol</a> in the case of an emergency. Proposed changes are broadcast
                    as events to the public blockchain at the time of proposal, before the timelock
                    begins.</p>
                <h1 id="how-disaster-recovery-will-be-handled">How disaster recovery will be
                    handled</h1>
                <p>The Dharma Protocol contracts have tested extensively, and independently audited
                    and reviewed by three external auditors (Zeppelin, ZK Labs, and Trail of Bits)
                    Even so, it is possible that vulnerabilities may surface in the protocol. The
                    team has implemented a way to pause the procotcol in the case of emergencies, to
                    prevent a situation where a hacker is able to exploit a known vulnerability. The
                    signatories of Dharma’s multi-signature wallet, collectively are able to pause
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
                <p>The /pause/ operation is the only function that the Dharma Protocol can invoke
                    immediately - all other functions require a timelock of seven days to elapse
                    before taking effect. Hence, once a fix has been made for the vulnerability, the
                    protocol can only be /unpaused/ again after seven days have passed. This allows
                    Dharma community members to view and contest the fix, and, if necessary, revoke
                    transfer allowances.</p>

                <ContentAnchor id="what-effects-pausing-certain-contracts-has-on-users"/>
                <h1>What effects pausing
                    certain contracts has on users</h1>
                <p>The /pause/ operation prevents the core functions in a contract from further
                    execution. For example, if the Collateralizer contract is paused, users will no
                    longer be able to return and seize collateral assets, or collateralize more
                    assets using the contract. In the case of the DebtKernel contract, a pause would
                    mean that users are no longer allowed to fill debt orders, cancel debt orders,
                    or cancel an issuance. The pause function is therefore a way to protect assets
                    that might otherwise be at risk in the case of a vulnerability.</p>
                <p>It is important to note that in the case of open orders, an inability to make
                    repayments due to a paused RepaymentRouter may result in delinquency.</p>
                <p>Here is a list of functions that are will be paused, in the case of an emergency,
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
                <h1>
                    How the multisig for the owner set will be managed, and parameters
                    relating to it (e.g., is it 3 of 5, 3 of 3)
                </h1>
                <p>We have deployed a 3-of-5 multi-signature wallet to be the owner of all deployed
                    Dharma Protocol contracts. This means that there are five signatories who can
                    submit or confirm a transaction as the owner of a Dharma Protocol contract, and
                    that any such transaction will only be executed if at least 3 of the signatories
                    confirm the transaction. All of the multi-signature wallet transactions, with
                    the exception of the /pause/ operation, are subject to a seven-day timelock
                    following the majority confirmation.</p>
                <h1 id="what-the-capabilities-of-the-owners-are-short-term-and-long-term">What the
                    capabilities of the owners are, short term and long term</h1>
                <p>The owner of the Dharma Protocol contracts, the multi-signature wallet, cannot
                    directly control any assets or debt orders on the protocol. Its main
                    capabilities relate to pausing contracts in the case of an emergency, and
                    authorizing which contracts may execute functions on other contracts within the
                    protocol. For example, the signatories may collectively vote to change which
                    contracts will be allowed to act as a transfer agent - to transfer funds using
                    the transfer proxy. Currently this set of contracts include the
                    /RepaymentRouter/ (to transfer funds specified as loan repayments), the
                    /DebtKernel/ (to transfer principal from the creditor to the debtor, and fees to
                    the underwriter and relayer), and the /Collateralizer/ (to transfer collateral
                    to the Collateralizer contract.) If one of these contracts were to be upgraded,
                    a new contract would be deployed and the signatories would vote on granting that
                    contract the authorization to act as a transfer agent. If the majority of the
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

                <h1 id="security-considerations">Security Considerations</h1>
                <h2 id="static-token-address-assumptions">Static Token Address Assumptions</h2>
                <p>Tokens on the Ethereum blockchain are upgradeable, in which case the address or
                    symbol for that token may change. When token upgrades occur for supported
                    tokens, Dharma Protocol contracts that store those token attributes, such as the
                    TokenRegistry, will need to be updated.</p>
                <p>The TokenRegistry in Dharma Protocol provides a mapping of each supported token’s
                    symbol to the address of that token. The Dharma team can update the stored
                    attributes for any supported token in the registry, including the token’s
                    address, and add new token symbols to the registry. However, like other contract
                    upgrades, these changes invoke the seven-day <a
                        href="#Upgrading">time-lock</a>. In the case of token updates,
                    it is appropriate for the applications that use Dharma Protocol (e.g. Dharma
                    Plex), to signal to their users that the token has changed.</p>
                <p>We have audited the Dharma Protocol and found no further cases where the
                    assumption has been made that a token’s attributes will remain fixed over
                    time.</p>

            </Container>
        );
    }
}
