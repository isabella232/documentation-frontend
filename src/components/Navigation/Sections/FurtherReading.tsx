// External libraries
import * as React from "react";

// Semantic-UI components
import { Menu } from "semantic-ui-react";

export default class FurtherReading extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Menu.Item>
                    <a href="https://whitepaper.dharma.io">Whitepaper</a>
                </Menu.Item>
            </div>
        );
    }
}
