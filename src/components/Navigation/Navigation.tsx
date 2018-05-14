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

                    <Menu.Item>
                        <a href="#Introduction">Introduction</a>
                    </Menu.Item>

                    <Menu.Item>
                        <a href="#Contributing">Contributing</a>
                    </Menu.Item>

                    <Accordion
                        exclusive={false}
                        panels={panels}
                        defaultActiveIndex={_.range(sections.length + 1)}
                        fluid />
                </Sidebar>
        );
    }
}
