// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader, Item, Menu } from "semantic-ui-react";

// Components
import Logo from "./Logo";

// Component-specific style
import "./Header.css";

/**
 * A component that includes Dharma branding and high-level navigation.
 */
export default class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <Menu className="HeaderMenu">
                <Container className="HeaderMenuContainer">
                    <Item>
                        <SemanticHeader className="NavigationBrand">
                            <Logo src={require("../../assets/images/logo_color.png")} />
                            Dharma.js
                        </SemanticHeader>
                    </Item>
                </Container>
            </Menu>
        );
    }
}
