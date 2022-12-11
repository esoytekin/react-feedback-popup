import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";
import "./FiveStarRatig.less";
import RatingStatus from "./RatingStatus";
import Star from "./Star";

const RatingStarsOuter = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

type FiveStarRatingProps = {
    rating: number;
    onRatingChange(rating: number): void;
};
const FiveStarRating = ({ rating, onRatingChange }: FiveStarRatingProps) => {
    const [stars, setStars] = React.useState([-1, -1, -1, -1, -1]);

    const onMouseEnter = (i: number) => {
        const currentRating = rating;

        if (currentRating > i) {
            return;
        }

        if (currentRating > -1) {
            const hoverRatedStars = stars.slice();
            _.fill(hoverRatedStars, 0, currentRating + 1, i + 1);
            _.fill(hoverRatedStars, -1, i + 1, hoverRatedStars.length);
            setStars(hoverRatedStars);
        } else {
            const hoverStars = Array(5).fill(-1);
            _.fill(hoverStars, 0, 0, i + 1);
            setStars(hoverStars);
        }
    };

    const onMouseLeave = () => {
        const currentRating = rating;
        if (currentRating > -1) {
            const resetRatedStars = stars.slice();
            _.fill(
                resetRatedStars,
                -1,
                currentRating + 1,
                resetRatedStars.length
            );
            setStars(resetRatedStars);
        } else {
            const resetStars = stars.slice();
            _.fill(resetStars, -1, 0, resetStars.length);
            setStars(resetStars);
        }
    };

    const onClick = (position: number) => {
        const clickedStar = stars.slice();

        _.fill(clickedStar, 1, 0, position + 1);

        setStars(clickedStar);
        onRatingChange(position);
    };

    const renderStar = (idx: number) => (
        <Star
            position={idx}
            value={stars[idx]}
            rated={rating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        />
    );

    return (
        <RatingStarsOuter>
            <RatingStarsOuter className="text-warning">
                {renderStar(0)}
                {renderStar(1)}
                {renderStar(2)}
                {renderStar(3)}
                {renderStar(4)}
            </RatingStarsOuter>
            <RatingStatus stars={stars} rated={rating} />
        </RatingStarsOuter>
    );
};

export default React.memo(FiveStarRating);
