// External libraries
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

export default class BasicContent extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Menu.Item>
                    <a href="#DebtOrderAPI">Opening a Debt Order</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#DebtOrderCancel">Cancelling a Debt Order</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#DebtOrderFill">Filling a Debt Order</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#DebtOrderRepay">Making Repayments</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#DebtOrderGetRepaymentAmount">Getting Total Expected Repayment Amount</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#DebtOrderSeize">Seizing Collateral</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#DebtOrderReturn">Returning Collateral</a>
                </Menu.Item>
            </div>
        );
    }
}
