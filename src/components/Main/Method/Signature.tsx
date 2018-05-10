import * as hljs from "highlight.js";
import * as React from "react";

import "./Snippet.css";

interface Props {
    code: string;
}

export default class Signature extends React.Component<Props, {}> {
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
        const { code } = this.props;

        return (
            <pre>
                <code className="Snippet" ref={this.snippetRef}
                      dangerouslySetInnerHTML={{ __html: code }}/>
            </pre>
        );
    }
}
