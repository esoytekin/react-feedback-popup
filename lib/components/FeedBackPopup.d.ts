import FeedBackModel from "../model/feedback.model";
declare type FeedbackPopupProps = {
    isOpen: boolean;
    onToggle(): void;
    title: string;
    onSubmit(st: FeedBackModel): void;
    placeholder: string;
    btnOk: string;
    btnCancel: string;
};
declare const FeedbackPopup: ({ isOpen, onToggle, title, onSubmit, placeholder, btnOk, btnCancel, }: FeedbackPopupProps) => JSX.Element;
export default FeedbackPopup;
