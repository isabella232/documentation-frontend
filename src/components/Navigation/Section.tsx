import * as React from "react";

import { Accordion, Header as SemanticHeader } from "semantic-ui-react";

import Classes from "./Classes";

import "./Section.css";

interface Props {
    section: SectionDocumentation;
}

export default class Section extends React.Component<Props, {}> {
    public render() {
        const { section } = this.props;

        return (
            <Accordion exclusive={false} fluid>
                <Accordion.Title >
                    <SemanticHeader className="SectionTitle">
                        { section.title }
                    </SemanticHeader>
                </Accordion.Title>

                <Accordion.Content>
                    <Classes classes={section.classes}/>
                </Accordion.Content>
            </Accordion>
        );
    }
}
