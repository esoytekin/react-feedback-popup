import * as React from "react";
import styled from "styled-components";
import clsx from "clsx";

const DivStatus = styled.em`
    position: absolute;
    right: 0;
`;

const getStatus = (stars: number[], _rated: number) => {
    let position = stars.filter((x) => x !== -1).length - 1;
    if (position < 0) {
        return {
            position,
            rating: -1,
        };
    }

    return {
        position,
        rating: stars[position],
    };
};

const RatingStatus = ({ stars, rated }: { stars: number[]; rated: number }) => {
    const status = getStatus(stars, rated);
    const fill = status.rating === 1;
    const rating = status.position;
    const classes = [
        `bi-emoji-angry${fill ? "-fill" : ""} text-danger`,
        `bi-emoji-frown${fill ? "-fill" : ""} text-danger`,
        `bi-emoji-expressionless${fill ? "-fill" : ""} text-warn`,
        `bi-emoji-laughing${fill ? "-fill" : ""} text-info`,
        `bi-emoji-heart-eyes${fill ? "-fill" : ""} text-success`,
    ];

    return <DivStatus className={clsx("pl-5 fs-2", classes[rating])} />;
};

export default RatingStatus;
