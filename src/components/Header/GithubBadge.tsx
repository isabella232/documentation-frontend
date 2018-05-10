import * as React from "react";

import { GITHUB_BADGE_URL } from "../../config/constants";

export default class GithubBadge extends React.Component<{}, {}> {
    public render() {
        return (
            <iframe
                src={GITHUB_BADGE_URL}
                frameBorder="0" scrolling="0" width="170px" height="20px"/>
        );
    }
}
