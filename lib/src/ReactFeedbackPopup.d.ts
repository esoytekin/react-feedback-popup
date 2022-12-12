import FeedBackModel from "./model/feedback.model";
declare type ReactFeedbackPopupProps = {
    color?: "primary" | "secondary" | "warning" | "danger" | "success";
    text?: string;
    onSubmit(data: FeedBackModel): void;
    placeholder?: string;
    btnOk?: string;
    btnCancel?: string;
    buttonText?: string;
};
declare const ReactFeedbackPopup: ({ color, text, onSubmit, placeholder, btnOk, btnCancel, buttonText, }: ReactFeedbackPopupProps) => JSX.Element;
export default ReactFeedbackPopup;
