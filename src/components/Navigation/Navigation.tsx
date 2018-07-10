import * as _ from "lodash";
import * as React from "react";

import { Accordion, Menu, Sidebar } from "semantic-ui-react";

import "./Navigation.css";

import Classes from "./Classes";
import ArchitectureContent from "./Sections/ArchitectureContent";
import BasicContent from "./Sections/BasicContent";
import DeployedAddresses from "./Sections/DeployedAddresses";
import FurtherReading from "./Sections/FurtherReading";
import InstallationContent from "./Sections/InstallationContent";
import MainConceptsContent from "./Sections/MainConceptsContent";

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

        const APIReferenceContent = (
            <div>
                <Accordion.Accordion panels={panels} />
            </div>
        );

        const rootPanels = [
            { title: "Installation", content: { content: <InstallationContent />, key: "content-1" } },
            { title: "Main Concepts", content: { content: <MainConceptsContent />, key: "content-2" } },
            { title: "Using DharmaJS", content: { content: <BasicContent />, key: "content-3" } },
            { title: "Architecture Overview", content: { content: <ArchitectureContent />, key: "content-4" } },
            { title: "Contract Addresses", content: { content: <DeployedAddresses />, key: "content-5" } },
            { title: "API Reference", content: { content: APIReferenceContent, key: "content-6" } },
            { title: "Further Reading", content: { content: <FurtherReading />, key: "content-7" } },
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
