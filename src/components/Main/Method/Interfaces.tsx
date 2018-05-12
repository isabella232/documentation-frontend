// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Header as SemanticHeader, Segment } from "semantic-ui-react";

interface Props {
    interfaceNames: string[];
}

/**
 * A component that renders documentation for class methods.
 */
export default class Interfaces extends React.Component<Props, {}> {
    public render() {
        const { interfaceNames } = this.props;

        if (interfaceNames.length === 0) {
            return null;
        }

        return (
            <Segment>
                <SemanticHeader size="small">Interfaces Referenced</SemanticHeader>

                <ul>
                    {
                        _.map(interfaceNames, (interfaceName) => {
                            return (
                                <li>
                                    <a href={`#${interfaceName}`}>{interfaceName}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </Segment>
        );
    }
}
