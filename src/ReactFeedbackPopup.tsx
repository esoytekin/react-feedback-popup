import * as React from "react";
import { Button } from "reactstrap";
import FeedbackPopup from "./components/FeedBackPopup";
import FeedBackModel from "./model/feedback.model";

type ReactFeedbackPopupProps = {
    color?: "primary" | "secondary" | "warning" | "danger" | "succeess";
    text?: string;
    onSubmit(data: FeedBackModel): void;
    placeholder?: string;
    btnOk?: string;
    btnCancel?: string;
    buttonText?: string;
};

const config: Partial<ReactFeedbackPopupProps> = {
    color: "primary",
    text: "Send Feedback",
    placeholder: "Please enter your message...",
    btnOk: "Submit",
    btnCancel: "Cancel",
};

const ReactFeedbackPopup = ({
    color,
    text,
    onSubmit,
    placeholder,
    btnOk,
    btnCancel,
    buttonText,
}: ReactFeedbackPopupProps) => {
    const [isOpen, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen(!isOpen);
    };
    return (
        <div className="react-feedback-popup div-feedback">
            <Button color={color || config.color} onClick={toggle}>
                <i className="bi-megaphone" />
                {buttonText === "" ? null : (
                    <span className="px-2">{buttonText ?? config.text}</span>
                )}
            </Button>
            <FeedbackPopup
                isOpen={isOpen}
                onToggle={toggle}
                title={text || config.text}
                onSubmit={onSubmit}
                placeholder={placeholder ?? config.placeholder}
                btnOk={btnOk ?? config.btnOk}
                btnCancel={btnCancel ?? config.btnCancel}
            />
        </div>
    );
};

export default ReactFeedbackPopup;
