import * as _ from "lodash";
import * as React from "react";

import { Accordion, Menu, Sidebar } from "semantic-ui-react";

import "./Navigation.css";

import Classes from "./Classes";

interface Props {
    documentation: Documentation;
}

interface State {
    visible: boolean;
}

export default class Navigation extends React.Component<Props, State> {
    public state = { visible: true };

    public toggleVisibility() {
        this.setState({ visible: !this.state.visible });
    }

    public render() {
        const { documentation } = this.props;
        const { visible } = this.state;

        const sections = documentation.sections;

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
