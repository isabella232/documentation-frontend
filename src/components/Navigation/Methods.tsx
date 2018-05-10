// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

// Component-specific style
import "./Methods.css";

interface Props {
    methods: MethodDocumentation[];
}

/**
 * A component that renders navigation to method documentation.
 */
export default class Methods extends React.Component<Props, {}> {
    public render() {
        const { methods } = this.props;

        return (
            <Menu borderless={true} vertical={true} className="ClassMethods">
                {
                    // For each method, render a link to the documentation for that method.
                    _.map(methods, (method) => {
                        const name = method.name;

                        return (
                            <a key={name} className="MethodName item" href={`#${name}`}>{name}</a>
                        );
                    })
                }
            </Menu>
        );
    }
}
