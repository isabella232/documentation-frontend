import * as _ from "lodash";
import * as React from "react";

import "./Class.css";

import { Container, Divider, Header as SemanticHeader } from "semantic-ui-react";

import Method from "../Method/Method";

interface Props {
    classDoc: ClassDocumentation;
}

export default class Class extends React.Component<Props, {}> {
    public render() {
        const { classDoc } = this.props;

        const name = classDoc.name;

        const methods = _.orderBy(classDoc.methods, "name");

        return (
            <div className="Class">
                <a className="ContentAnchor" id={name} />

                <SemanticHeader size="large">{name}</SemanticHeader>
                {
                    _.map(methods, (method) => {
                        return (
                            <Container>
                                <Method key={method.name} method={method}/>
                                <Divider hidden />
                            </Container>
                        );
                    })
                }
            </div>
        );
    }
}
