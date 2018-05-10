import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * Semantic-UI CSS, compiled from SCSS.
 */
import "./assets/semantic-ui/scss/bundled/semantic-ui.bundled.css";

/**
 * High-level application CSS.
 */
import "./index.css";

/**
 * The application container.
 */
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <App/>,
    document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
