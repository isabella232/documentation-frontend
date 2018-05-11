// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Segment } from "semantic-ui-react";

// Components
import Section from "./Section/Section";

// Component-specific style
import "./Main.css";

import Interface from "./Interfaces/Interface";

interface Props {
    documentation: Documentation;
}

/**
 * A component that renders the main contents of the documentation.
 */
export default class Main extends React.Component<Props, {}> {
    public render() {
        const { documentation } = this.props;

        return (
            <Segment basic className="MainSegment">
                {
                    // For each section, render a Section component with the relevant data.
                    _.map(documentation.sections, (section) => {
                        return <Section key={section.title} section={section}/>;
                    })
                }

                <h1>Interfaces</h1>
                {
                    _.map(documentation.interfaces, (interfaceDoc) => {
                        return <Interface interfaceDoc={interfaceDoc}/>;
                    })
                }
            </Segment>
        );
    }
}
