import * as _ from "lodash";
import * as React from "react";

import { Accordion, Menu, Sidebar } from "semantic-ui-react";

import "./Navigation.css";

import Classes from "./Classes";
import Method from "./Method/Method";

interface Props {
    documentation: Documentation;
    visible: boolean;
}

/**
 * A component that renders navigation for the given documentation data.
 *
 * TODO: Make a search filter.
 */
export default class Navigation extends React.Component<Props, {}> {
    public render() {
        const { documentation, visible } = this.props;

        const sections = documentation.sections;

        // For each of the sections, create an accordion containing navigation for
        // the relevant classes.
        const panels = _.map(sections, (section) => {
            return {
                title: section.title.replace(/_/g, " "),
                content: (
                    <Accordion.Content>
                        <Classes classes={section.classes} />
                    </Accordion.Content>
                ),
            };
        });

        // Add each of the interfaces.
        panels.push({
            title: "Interfaces",
            content: (
                <Accordion.Content>
                    {_.map(documentation.interfaces, (interfaceDoc) => {
                        const { name } = interfaceDoc;

                        return (
                            <Menu.Item key={name}>
                                <a href={`#${name}`}>{name}</a>
                            </Menu.Item>
                        );
                    })}
                </Accordion.Content>
            ),
        });

        const InstallationContent = (
            <div>
                <Menu.Item>
                    <a href="#Installation">Installing Dharma.js</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#Import">Importing Dharma.js</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#Instantiation">Instantiating Dharma.js</a>
                </Menu.Item>
            </div>
        );

        const LoanRequestAPIContent = (
            <Menu.Item>
                <Menu borderless={true} vertical={true}>
                    <Menu.Item>
                        <a href="#LoanRequestAPI">Loan Request</a>
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanRequestCreate" name="create" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanRequestCancel" name="cancel" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanRequestFill" name="fill" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanRequestGenerateLoan" name="generateLoan" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method
                            id="LoanRequestAllowCollateralTransfer"
                            name="allowCollateralTransfer"
                        />
                    </Menu.Item>

                    <Menu.Item>
                        <Method
                            id="LoanRequestAllowPrincipalTransfer"
                            name="allowPrincipalTransfer"
                        />
                    </Menu.Item>
                </Menu>
            </Menu.Item>
        );

        const LoanAPIContent = (
            <Menu.Item>
                <Menu borderless={true} vertical={true}>
                    <Menu.Item>
                        <a href="#LoanAPI">Loan</a>
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanRepay" name="makeRepayment" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method
                            id="LoanGetRepaymentAmount"
                            name="getTotalExpectedRepaymentAmount"
                        />
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanGetOutstandingAmount" name="getOutstandingAmount" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanSeize" name="seizeCollateral" />
                    </Menu.Item>

                    <Menu.Item>
                        <Method id="LoanReturn" name="returnCollateral" />
                    </Menu.Item>
                </Menu>
            </Menu.Item>
        );

        const BasicReference = (
            <div>
                {LoanRequestAPIContent}
                {LoanAPIContent}
            </div>
        );

        const APIReferenceContent = (
            <div>
                <Accordion.Accordion panels={panels} />
            </div>
        );

        const rootPanels = [
            { title: "Installation", content: { content: InstallationContent, key: "content-1" } },
            { title: "Basic Reference", content: { content: BasicReference, key: "content-2" } },
            { title: "API Reference", content: { content: APIReferenceContent, key: "content-3" } },
        ];

        return (
            <Sidebar
                as={Menu}
                className="SidebarMenu"
                animation="push"
                width="wide"
                visible={visible}
                vertical
                borderless={true}>
                <Accordion defaultActiveIndex={1} panels={rootPanels} />

                {/*<Menu.Item>*/}
                {/*<a href="#Contributing">Contributing to Dharma</a>*/}
                {/*</Menu.Item>*/}

                {/*<Menu.Item>*/}
                {/*<a href="#Upgrading">Upgrade Procedures</a>*/}
                {/*</Menu.Item>*/}
            </Sidebar>
        );
    }
}
