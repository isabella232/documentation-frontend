import * as hljs from "highlight.js";
import * as React from "react";

import "./Method.css";

import Signature from "./Signature";

import { REPO_URL } from "../../../config/constants";

import { Container, Header as SemanticHeader } from "semantic-ui-react";

interface Props {
    method: MethodDocumentation;
}

export default class Method extends React.Component<Props, {}> {
    private readonly snippetRef: React.RefObject<any>;

    constructor(props: Props) {
        super(props);

        this.snippetRef = React.createRef();
    }

    public componentDidMount() {
        this.highlightCode();
    }

    public highlightCode() {
        const node = this.snippetRef.current;

        if (node) {
            hljs.configure({ languages: ["typescript"] });
            hljs.highlightBlock(node);
        }
    }

    public render() {
        const { method } = this.props;

        const name = method.name;

        return (
            <Container className="Method">
                <a className="ContentAnchor" id={name}/>

                <SemanticHeader>{name}</SemanticHeader>

                <p>{method.description}</p>

                <Signature code={method.signature}/>

                <a href={`${REPO_URL}${method.source}`}>Source</a>
            </Container>
        );
    }
}
