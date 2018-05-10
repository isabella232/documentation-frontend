import * as _ from "lodash";
import * as React from "react";

import { Menu } from "semantic-ui-react";

import "./Methods.css";

interface Props {
    methods: MethodDocumentation[];
}

export default class Methods extends React.Component<Props, {}> {
    public render() {
        const { methods } = this.props;

        return (
            <Menu borderless={true} vertical={true} className="ClassMethods">
                {
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
