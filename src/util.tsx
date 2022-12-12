const classes = (fill: boolean) => [
    `bi-emoji-angry${fill ? "-fill" : ""}`,
    `bi-emoji-frown${fill ? "-fill" : ""}`,
    `bi-emoji-expressionless${fill ? "-fill" : ""}`,
    `bi-emoji-laughing${fill ? "-fill" : ""}`,
    `bi-emoji-heart-eyes${fill ? "-fill" : ""}`,
];

type StatusIndex = {
    fill: boolean;
    index: number;
};
export const getStatusClassIndex = (arr: number[]): StatusIndex => {
    const getHoveredStars = (x: number[]) => x.filter((xi) => xi !== -1);

    const getLastPosition = (x: number[]) => x.length - 1;

    const hoveredStars = getHoveredStars(arr);

    const position = getLastPosition(hoveredStars);

    return {
        index: position,
        fill: arr[position] === 1,
    };
};

export const getStatusClass = (arr: number[]) => {
    const { index, fill } = getStatusClassIndex(arr);
    return classes(fill)[index];
};
