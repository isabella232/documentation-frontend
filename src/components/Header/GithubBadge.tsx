import * as React from "react";

/**
 * The URL to an API where the GitHub repo badge is found.
 */
import { GITHUB_BADGE_URL } from "../../config/constants";

/**
 * A component that renders the Dharma.js Github badge, including star count.
 */
export default class GithubBadge extends React.Component<{}, {}> {
    public render() {
        return (
            <iframe
                src={GITHUB_BADGE_URL}
                frameBorder="0" scrolling="0" width="170px" height="20px"/>
        );
    }
}
