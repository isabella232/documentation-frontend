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
                title: section.title,
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

        return (
            <Sidebar as={Menu}
                     className="SidebarMenu"
                     animation="push"
                     width="wide"
                     visible={visible}
                     vertical
                     borderless={true}>

                <h3>Installation</h3>
                <Menu.Item>
                    <a href="#Installation">Installing Dharma.js</a>
                </Menu.Item>

                <h3>Basic</h3>
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

                <h3>API Reference</h3>
                <Accordion panels={panels}/>

                <h3>Other</h3>
                <Menu.Item>
                    <a href="#Contributing">Contributing to Dharma</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#Upgrading">Upgrade Procedures</a>
                </Menu.Item>
            </Sidebar>
        );
    }
}
