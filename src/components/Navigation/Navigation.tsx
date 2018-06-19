import * as _ from "lodash";
import * as React from "react";

import { Accordion, Menu, Sidebar } from "semantic-ui-react";

import "./Navigation.css";

import Classes from "./Classes";

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
                        <Classes classes={section.classes}/>
                    </Accordion.Content>
                ),
            };
        });

        // Add each of the interfaces.
        panels.push({
            title: "Interfaces",
            content: (
                <Accordion.Content>
                    {
                        _.map(documentation.interfaces, (interfaceDoc) => {
                            const { name } = interfaceDoc;

                            return (
                                <Menu.Item key={name}>
                                    <a href={`#${name}`}>{name}</a>
                                </Menu.Item>
                            );
                        })
                    }
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

        const BasicContent = (
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

        const APIReferenceContent = (
            <div>
                <Accordion.Accordion panels={panels} />
            </div>
        );

        const rootPanels = [
            { title: "Installation", content: { content: InstallationContent, key: "content-1" } },
            { title: "Introduction", content: { content: BasicContent, key: "content-2" } },
            { title: "API Reference", content: { content: APIReferenceContent, key: "content-3" } },
        ];

        return (
            <Sidebar as={Menu}
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
