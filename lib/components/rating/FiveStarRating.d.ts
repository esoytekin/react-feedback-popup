import * as React from "react";
import "./FiveStarRatig.less";
declare type FiveStarRatingProps = {
    rating: number;
    onRatingChange(rating: number): void;
};
declare const _default: React.MemoExoticComponent<({ rating, onRatingChange }: FiveStarRatingProps) => JSX.Element>;
export default _default;
