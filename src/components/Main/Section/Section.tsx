import * as _ from "lodash";
import * as React from "react";

import "./Section.css";

import Class from "../Class/Class";

import { Header as SemanticHeader } from "semantic-ui-react";

interface Props {
    section: SectionDocumentation;
}

export default class Section extends React.Component<Props, {}> {
    public render() {
        const { section } = this.props;

        return (
            <div className="Section">
                <SemanticHeader size="huge" className="SectionTitle">{section.title}</SemanticHeader>
                {
                    _.map(section.classes, (classDoc) => {
                        return <Class key={classDoc.name} classDoc={classDoc}/>;
                    })
                }
            </div>
        );
    }
}
