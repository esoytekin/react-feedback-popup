import * as React from "react";
import styled from "styled-components";

type StarProps = {
    onMouseEnter(idx: number): void;
    onMouseLeave(): void;
    onClick(position: number): void;
    position: number;
    rated: number;
    value: number;
};

const DivPointer = styled.div`
    cursor: pointer;
`;
const Star = ({
    onMouseEnter,
    value,
    position,
    rated,
    onMouseLeave,
    onClick,
}: StarProps) => {
    return (
        <DivPointer
            className={`${
                position <= rated
                    ? ""
                    : value == 0
                    ? "bi-star-fill text-warning"
                    : "bi-star"
            } ${position <= rated ? "bi-star-fill text-danger" : ""} px-2 fs-2`}
            onMouseEnter={() => onMouseEnter(position)}
            onMouseLeave={onMouseLeave}
            onClick={() => onClick(position)}
        />
    );
};

export default Star;
