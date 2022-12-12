import * as React from "react";
import styled from "styled-components";
import clsx from "clsx";
import { getStatusClass } from "../../util";

const DivStatus = styled.em`
    position: absolute;
    right: 0;
`;

const RatingStatus = ({ stars, rated }: { stars: number[]; rated: number }) => {
    const statusClass = getStatusClass(stars);

    return <DivStatus className={clsx("pl-5 fs-2", statusClass)} />;
};

export default RatingStatus;
