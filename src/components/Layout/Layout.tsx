import * as React from "react";

import { Container, Sidebar } from "semantic-ui-react";

import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";

interface Props {
    documentation: Documentation;
}

interface State {
    screenWidth: number;
}

/**
 * The number of pixels, below which the layout responds
 * to a mobile-friendly view.
 *
 * Currently set to the size of an iPad.
 *
 * @type {number}
 */
const LAYOUT_BREAK_POINT = 768;

export default class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { screenWidth: 0 };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    public componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    public updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
    }

    public render() {
        const { documentation } = this.props;

        const navigationVisible = this.state.screenWidth > LAYOUT_BREAK_POINT;

        return (
            <Container>
                <Navigation documentation={documentation} visible={navigationVisible} />

                <Sidebar.Pusher>
                    <Main documentation={documentation}/>
                </Sidebar.Pusher>
            </Container>
        );
    }
}
