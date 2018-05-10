// External libraries
import * as hljs from "highlight.js";
import * as React from "react";

// Component-specific styling
import "./Snippet.css";

interface Props {
    code: string;
}

/**
 * A component that renders a method's call signature as a code snippet.
 */
export default class Signature extends React.Component<Props, {}> {
    private readonly snippetRef: React.RefObject<any>;

    constructor(props: Props) {
        super(props);

        // A reference to the code-snippet node, for code highlighting.
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
