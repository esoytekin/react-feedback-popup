import * as React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Row,
    Col,
    Input,
    FormGroup,
} from "reactstrap";
import FiveStarRating from "./rating/FiveStarRating";
import FeedBackModel from "../model/feedback.model";

type FeedbackPopupProps = {
    isOpen: boolean;
    onToggle(): void;
    title: string;
    onSubmit(st: FeedBackModel): void;
    placeholder: string;
    btnOk: string;
    btnCancel: string;
};

const initialState: FeedBackModel = {
    rating: -1,
    message: "",
};

const FeedbackPopup = ({
    isOpen,
    onToggle,
    title,
    onSubmit,
    placeholder,
    btnOk,
    btnCancel,
}: FeedbackPopupProps) => {
    const [state, setState] = React.useState(initialState);

    const clearState = () => {
        setState(initialState);
    };

    return (
        <Modal
            className="react-feedback-popup modal-feedback"
            isOpen={isOpen}
            toggle={() => {
                clearState();
                onToggle();
            }}
        >
            <ModalHeader
                toggle={() => {
                    clearState();
                    onToggle();
                }}
            >
                {title}
            </ModalHeader>
            <ModalBody className="p-3">
                <form>
                    <Row>
                        <Col sm={12}>
                            <FormGroup>
                                <FiveStarRating
                                    rating={state.rating}
                                    onRatingChange={(rating) => {
                                        setState((prev) => ({
                                            ...prev,
                                            rating,
                                        }));
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm={12} className="p-3">
                            <Input
                                type="textarea"
                                id="message"
                                placeholder={placeholder}
                                value={state.message}
                                onChange={(e) => {
                                    setState((prev) => ({
                                        ...prev,
                                        message: e.target.value,
                                    }));
                                }}
                            />
                        </Col>
                    </Row>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={() => {
                        if (state.rating === -1) {
                            return;
                        }
                        onSubmit({ ...state, rating: state.rating + 1 });
                        onToggle();
                        setState(initialState);
                    }}
                >
                    {btnOk}
                </Button>
                <Button
                    color="secondary"
                    onClick={() => {
                        setState(initialState);
                        onToggle();
                    }}
                >
                    {btnCancel}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default FeedbackPopup;
