// External libraries
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

export default class ArchitectureContent extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Menu.Item>
                    <a href="#ArchitectureIntroduction">Introduction</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ContractsDebtKernel">DebtKernel.sol</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ContractsDebtRegistry">DebtRegistry.sol</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ContractsTokenTransferProxy">TokenTransferProxy.sol</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#UpgradeProcedure">Upgrade Procedure</a>
                </Menu.Item>
            </div>
        );
    }
}
