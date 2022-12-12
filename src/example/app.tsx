import * as React from "react";
import "../style/ReactFeedbackPopup.less";

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
            <ReactFeedbackPopup onSubmit={onSubmit} color="danger" />
            <ReactFeedbackPopup onSubmit={onSubmit} color="primary" />
            <ReactFeedbackPopup onSubmit={onSubmit} color="warning" />
            <ReactFeedbackPopup onSubmit={onSubmit} color="success" />
            <ReactFeedbackPopup onSubmit={onSubmit} color="secondary" />
        </div>
    );
};

export default hot(module)(App);
