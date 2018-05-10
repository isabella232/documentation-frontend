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

        return (
                <Sidebar as={Menu}
                         className="SidebarMenu"
                         animation="push"
                         width="wide"
                         visible={visible}
                         vertical
                         borderless={true}>
                    <Accordion
                        exclusive={false}
                        panels={panels}
                        defaultActiveIndex={_.range(sections.length)}
                        fluid />
                </Sidebar>
        );
    }
}
