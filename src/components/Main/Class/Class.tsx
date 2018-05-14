// External libraires
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Container, Divider, Header as SemanticHeader } from "semantic-ui-react";

// Components
import ContentAnchor from "../ContentAnchor";
import Method from "../Method/Method";

interface Props {
    classDoc: ClassDocumentation;
}

/**
 * A component that renders documentation for a Class.
 */
export default class Class extends React.Component<Props, {}> {
    public render() {
        const { classDoc } = this.props;

        // Get the name of the Dharma.js class.
        const name = classDoc.name;

        // Ensure that the methods are alphabetically ordered.
        const methods = _.orderBy(classDoc.methods, "name");

        return (
            <div className="Class">
                <ContentAnchor id={name}/>

                <SemanticHeader size="large">{name}</SemanticHeader>
                {
                    // For each method, render a Method component followed by a hidden UI divider.
                    _.map(methods, (method) => {
                        return (
                            <Container key={method.name}>
                                <Method method={method}/>

                                <Divider />
                            </Container>
                        );
                    })
                }
            </div>
        );
    }
}
