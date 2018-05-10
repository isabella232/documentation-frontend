import * as React from "react";

import "./Header.css";

import { Container, Header as SemanticHeader, Item, Menu } from "semantic-ui-react";

import GithubBadge from "./GithubBadge";

import Logo from "./Logo";

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
                        <GithubBadge/>
                    </Item>
                </Container>
            </Menu>
        );
    }
}
