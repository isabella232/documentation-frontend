import * as _ from "lodash";
import * as React from "react";

import { Segment } from "semantic-ui-react";

import "./Main.css";
import Section from "./Section/Section";

interface Props {
    documentation: Documentation;
}

export default class Main extends React.Component<Props, {}> {
    public render() {
        const { documentation } = this.props;

        return (
            <Segment basic className="MainSegment">
                {
                    _.map(documentation.sections, (section) => {
                        return <Section key={section.title} section={section}/>;
                    })
                }
            </Segment>
        );
    }
}
