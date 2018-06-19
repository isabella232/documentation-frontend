// External libraries
import * as React from "react";

// Components
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";

// The S3 location where documentation is stored.
import { DOCUMENTATION_SOURCE } from "./config/constants";

interface State {
    documentation: Documentation | null;
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        // When first loaded, the application has no documentation,
        // in which case we will load a loading gif.
        this.state = { documentation: null };
    }

    public async componentDidMount() {
        // Once the application mounts, we load the documentation from s3,
        // and re-render our application using the documentation data.
        const contents = await fetch(DOCUMENTATION_SOURCE);
        const documentation = await contents.json();

        this.setState({ documentation });
    }

    public render() {
        const { documentation } = this.state;

        return (
            <div className="App">
                <Header/>

                {
                    documentation
                        // Once the documentation data has loaded, render navigation and content.
                        ? <Layout documentation={documentation}/>
                        // Before documentation data is present, render a loader.
                        : <Loading />
                }
            </div>
      );
  }
}

export default App;
