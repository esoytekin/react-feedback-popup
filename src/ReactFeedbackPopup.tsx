import "./style.less";

import * as React from "react";
import { Button } from "reactstrap";
import FeedbackPopup from "./components/FeedBackPopup";

type ReactFeedbackPopupProps = {
    color?: string;
};

const ReactFeedbackPopup = ({ color }: ReactFeedbackPopupProps) => {
    const [isOpen, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen(!isOpen);
    };
    return (
        <>
            <Button color={color || "primary"} onClick={toggle}>
                <i className="bi-megaphone" />
                <span className="px-2">Geri Bildirim Gonder</span>
            </Button>
            <FeedbackPopup isOpen={isOpen} onToggle={toggle} />
        </>
    );
};

export default ReactFeedbackPopup;
