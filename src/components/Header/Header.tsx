// External libraries
import * as React from "react";

// Semantic-UI components
import { Container, Header as SemanticHeader, Item, Menu } from "semantic-ui-react";

// Components
import GithubBadge from "./GithubBadge";
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
                <Container>
                    <Item>
                        <SemanticHeader className="NavigationBrand">
                            <Logo src={require("../../assets/images/logo_color.png")} />
                            Dharma.js
                        </SemanticHeader>
                    </Item>

                    <Item>
                        <a href="https://whitepaper.dharma.io">Whitepaper</a>
                    </Item>

                    <Item>
                        <a href="https://dharma.io/tutorial">Tutorial</a>
                    </Item>

                    <Item>
                        <a href="https://plex.dharma.io">Plex</a>
                    </Item>

                    <Item className="float right">
                        <GithubBadge/>
                    </Item>
                </Container>
            </Menu>
        );
    }
}
