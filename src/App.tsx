import * as React from "react";

import "./App.css";

import Header from "./components/Header/Header";

import Layout from "./components/Layout/Layout";

const documentationSource = "https://s3-us-west-2.amazonaws.com/json-docs/dharma.js/documentation.json";

import { Loader } from "semantic-ui-react";

interface State {
    documentation: Documentation | null;
}

import "./assets/semantic-ui/js/accordion";
import "./assets/semantic-ui/js/api";
import "./assets/semantic-ui/js/checkbox";
import "./assets/semantic-ui/js/colorize";
import "./assets/semantic-ui/js/dimmer";
import "./assets/semantic-ui/js/dropdown";
import "./assets/semantic-ui/js/embed";
import "./assets/semantic-ui/js/form";
import "./assets/semantic-ui/js/modal";
import "./assets/semantic-ui/js/nag";
import "./assets/semantic-ui/js/popup";
import "./assets/semantic-ui/js/progress";
import "./assets/semantic-ui/js/rating";
import "./assets/semantic-ui/js/search";
import "./assets/semantic-ui/js/shape";
import "./assets/semantic-ui/js/sidebar";
import "./assets/semantic-ui/js/site";
import "./assets/semantic-ui/js/state";
import "./assets/semantic-ui/js/sticky";
import "./assets/semantic-ui/js/tab";
import "./assets/semantic-ui/js/transition";
import "./assets/semantic-ui/js/visibility";
import "./assets/semantic-ui/js/visit";

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
