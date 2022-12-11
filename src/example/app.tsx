import * as React from "react";
import "../ReactFeedbackPopup.less";

import { hot } from "react-hot-loader";
import ReactFeedbackPopup from "../ReactFeedbackPopup";
import FeedBackModel from "../model/feedback.model";

const App = () => {
    const onSubmit = (data: FeedBackModel) => {
        console.log(data);
    };
    return (
        <div className="d-flex justify-content-center p-5">
            <ReactFeedbackPopup onSubmit={onSubmit} />
        </div>
    );
};

export default hot(module)(App);
