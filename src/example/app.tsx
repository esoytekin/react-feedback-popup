import * as React from "react";
import "../ReactFeedbackPopup.less";

import { hot } from "react-hot-loader";
import ReactFeedbackPopup from "../ReactFeedbackPopup";

const App = () => {
    return (
        <div className="d-flex justify-content-center p-5">
            <ReactFeedbackPopup />
        </div>
    );
};

export default hot(module)(App);
