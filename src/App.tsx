import * as React from "react";

import "./App.css";

import Header from "./components/Header/Header";

import Layout from "./components/Layout/Layout";

const documentationSource = "https://s3-us-west-2.amazonaws.com/json-docs/dharma.js/documentation.json";

import { Loader } from "semantic-ui-react";

interface State {
    documentation: Documentation | null;
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = { documentation: null };
    }

    public async componentDidMount() {
        const contents = await fetch(documentationSource);
        const documentation = await contents.json();

        this.setState({ documentation });
    }

    public render() {
        const { documentation } = this.state;

        return (
            <div className="App">
                <Header/>
                {
                    (documentation)
                        ? <Layout documentation={documentation}/>
                        : <Loader active={true} content="Loading Documentation..." />
                }
            </div>
      );
  }
}

export default App;
