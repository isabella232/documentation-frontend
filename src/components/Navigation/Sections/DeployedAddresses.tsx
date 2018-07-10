// External libraries
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

export default class DeployedAddresses extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Menu.Item>
                    <a href="#AddressDebtKernel">DebtKernel</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressDebtToken">DebtToken</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressDebtRegistry">DebtRegistry</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressTokenTransferProxy">TokenTransferProxy</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressDharmaMultiSigWallet">DharmaMultiSigWallet</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressRepaymentRouter">RepaymentRouter</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressTokenRegistry">TokenRegistry</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressSimpleInterestTermsContract">SimpleInterestTermsContract</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressCollateralizedSimpleInterestTermsContract">
                        CollateralizedSimpleInterestTermsContract</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressCollateralizer">Collateralizer</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressPermissionsLib">PermissionsLib</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#AddressContractRegistry">ContractRegistry</a>
                </Menu.Item>
            </div>
        );
    }
}
