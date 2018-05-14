// External libraries
import * as React from "react";

// Semantic-ui components.
import { Icon } from "semantic-ui-react";

interface Props {
    id: string;
}

/**
 * A component that renders a link icon for reference.
 */
export default class SectionLink extends React.Component<Props, {}> {
    public render() {
        const { id } = this.props;

        return (
            <a href={`#${id}`}>{" "}
                <Icon name="linkify" size="small"/>
            </a>
        );
    }
}
