// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

// Components
import Methods from "./Methods";

// Component-specific style
import "./Classes.css";

interface Props {
    classes: ClassDocumentation[];
}

/**
 * A component that renders navigation for Dharma.js class documentation.
 */
export default class Classes extends React.Component<Props, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <Menu borderless={true} vertical={true} className="SectionClasses">
                {
                    // For each class, render a menu item linking to that class' documentation,
                    // followed by a list of methods defined in the class.
                    _.map(classes, (classObj) => {
                        // The class name, e.g. "CollateralizedLoanTerms".
                        const name = classObj.name;

                        return <Menu.Item key={name} className="Class">
                            <a className="ClassName" href={`#${name}`}>{name}</a>

                            <Methods methods={classObj.methods}/>
                        </Menu.Item>;
                    })
                }
            </Menu>
        );
    }
}
