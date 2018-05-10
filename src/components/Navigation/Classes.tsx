import * as _ from "lodash";
import * as React from "react";

import Methods from "./Methods";

import { Menu } from "semantic-ui-react";

import "./Classes.css";

interface Props {
    classes: ClassDocumentation[];
}

export default class Classes extends React.Component<Props, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <Menu borderless={true} vertical={true} className="SectionClasses">
                {
                    _.map(classes, (classObj) => {
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
