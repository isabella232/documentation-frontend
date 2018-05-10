// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Header as SemanticHeader } from "semantic-ui-react";

// Components
import Class from "../Class/Class";

interface Props {
    section: SectionDocumentation;
}

/**
 * A component that renders documentation for a section (e.g. all "adapters").
 */
export default class Section extends React.Component<Props, {}> {
    public render() {
        const { section } = this.props;

        return (
            <div className="Section">
                <SemanticHeader size="huge" className="SectionTitle">
                    {section.title}
                </SemanticHeader>

                {
                    // For each class, render a Class component with the relevant data.
                    _.map(section.classes, (classDoc) => {
                        return <Class key={classDoc.name} classDoc={classDoc}/>;
                    })
                }
            </div>
        );
    }
}
