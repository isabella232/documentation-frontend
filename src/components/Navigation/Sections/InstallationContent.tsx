// External libraries
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

export default class InstallationContent extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Menu.Item>
                    <a href="#Installation">Installing Dharma.js</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#Import">Importing Dharma.js</a>
                </Menu.Item>

                <Menu.Item>
                    <a href="#Instantiation">Instantiating Dharma.js</a>
                </Menu.Item>
            </div>
        );
    }
}
