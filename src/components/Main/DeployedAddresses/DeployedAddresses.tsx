// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";

/**
 * A component that renders an overview of architecture to the documentation.
 */
export default class DeployedAddresses extends React.Component<{}, {}> {
    public render() {
        return (
            <Container className="Section">
                <SemanticHeader size="huge" className="SectionTitle">
                    Contract Addresses
                </SemanticHeader>

                <div className="subsection">
                    <ContentAnchor id="AddressDebtKernel"/>
                    <SemanticHeader size="large">DebtKernel</SemanticHeader>

                    <p>Mainnet: <pre>0x8ef1351941d0cd8da09d5a4c74f2d64503031a18</pre></p>

                    <p>Kovan: <pre>0x755e131019e5ab3e213dc269a4020e3e82e06e20</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressDebtToken"/>
                    <SemanticHeader size="large">DebtToken</SemanticHeader>

                    <p>Mainnet: <pre>0xf7b3fc555c458c46d288ffd049ddbfb09f706df7</pre></p>

                    <p>Kovan: <pre>0x12c8615fd55bf6e1f5a298cebdc72e50f838df74</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressDebtRegistry"/>
                    <SemanticHeader size="large">DebtRegistry</SemanticHeader>

                    <p>Mainnet: <pre>0x4e0f2b97307ad60b741f993c052733acc1ea5811</pre></p>

                    <p>Kovan: <pre>0x9662d6cae0e6914a388cb96c1c161cc4d12c3d7a</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressTokenTransferProxy"/>
                    <SemanticHeader size="large">TokenTransferProxy</SemanticHeader>

                    <p>Mainnet: <pre>0x2f40766e91aaee4794d3389ac8dc3a4b8fd7ab3e</pre></p>

                    <p>Kovan: <pre>0x668beab2e4dfec1d8c0a70fb5e52987cb22c2f1a</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressDharmaMultiSigWallet"/>
                    <SemanticHeader size="large">DharmaMultiSigWallet</SemanticHeader>

                    <p>Mainnet: <pre>0x9445d5ddc2d8a3663ce8cc9fe74009f99b343cfc</pre></p>

                    <p>Kovan: <pre>0x5e6d80063af17bf22b6828a7a61693ec37881563</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressRepaymentRouter"/>
                    <SemanticHeader size="large">RepaymentRouter</SemanticHeader>

                    <p>Mainnet: <pre>0xc1df9b92645cc3b6733992c692a39c34a86fae5f</pre></p>

                    <p>Kovan: <pre>0x0688659d5e36896da7e5d44ebe3e10aa9d2c9968</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressTokenRegistry"/>
                    <SemanticHeader size="large">TokenRegistry</SemanticHeader>

                    <p>Mainnet: <pre>0xd79396ab3bfaaa0d9f6d11f95bb641601d93c0a9</pre></p>

                    <p>Kovan: <pre>0x6949948d93f3dbe50ec2fe54815fa33bfa284d35</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressSimpleInterestTermsContract"/>
                    <SemanticHeader size="large">SimpleInterestTermsContract</SemanticHeader>

                    <p>Mainnet: <pre>0xb78a7d1c1d03cf9155cc522097cbc679e15cf9a3</pre></p>

                    <p>Kovan: <pre>0x4cad7ad79464628c07227928c851d3bc5ef3da0c</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressCollateralizedSimpleInterestTermsContract"/>
                    <SemanticHeader
                        size="large">CollateralizedSimpleInterestTermsContract</SemanticHeader>

                    <p>Mainnet: <pre>0x5de2538838b4eb7fa2dbdea09d642b88546e5f20</pre></p>

                    <p>Kovan: <pre>0x13763cf3eb3b6813fa800d4935725a0504c8eb8f</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressCollateralizer"/>
                    <SemanticHeader size="large">Collateralizer</SemanticHeader>

                    <p>Mainnet: <pre>0xecc718386176d714dc9e4e35e177396b291499ee</pre></p>

                    <p>Kovan: <pre>0x4b86bbe375577262cb0b3b7893e3de0d11751dd6</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressPermissionsLib"/>
                    <SemanticHeader size="large">PermissionsLib</SemanticHeader>

                    <p>Mainnet: <pre>0xba0d793fb316d7a457b758e75a57e22ee14bc188</pre></p>

                    <p>Kovan: <pre>0x0e7e2aace2ed2565777b420fd181b556971a8cb1</pre></p>
                </div>

                <div className="subsection">
                    <ContentAnchor id="AddressContractRegistry"/>
                    <SemanticHeader size="large">ContractRegistry</SemanticHeader>

                    <p>Mainnet: <pre>0x10512440113cb6cb613be403135876d2e0a42c0b</pre></p>

                    <p>Kovan: <pre>0x506acb19a451cc6e2a5c76e65f6b65840406e5f9</pre></p>
                </div>
            </Container>
        );
    }
}
