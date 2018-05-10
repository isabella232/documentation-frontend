import * as React from "react";

import { Container, Sidebar } from "semantic-ui-react";

import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";

interface Props {
    documentation: Documentation;
}

export default class Layout extends React.Component<Props, {}> {
    public render() {
        const { documentation } = this.props;

        return (
            <Container>
                <Navigation documentation={documentation}/>

                <Sidebar.Pusher>
                    <Main documentation={documentation}/>
                </Sidebar.Pusher>
            </Container>
        );
    }
}
