// External libraries
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

export default class MainConceptsContent extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Menu.Item>
                    <a href="#ConceptDebtOrder">Debt Order</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ConceptTermsContract">Terms Contract</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ConceptDebtToken">Debt Token</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ConceptRelayer">Relayer</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#ConceptUnderwriter">Underwriter</a>
                </Menu.Item>
            </div>
        );
    }
}
