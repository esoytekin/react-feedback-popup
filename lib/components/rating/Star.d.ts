declare type StarProps = {
    onMouseEnter(idx: number): void;
    onMouseLeave(): void;
    onClick(position: number): void;
    position: number;
    rated: number;
    value: number;
};
declare const Star: ({ onMouseEnter, value, position, rated, onMouseLeave, onClick, }: StarProps) => JSX.Element;
export default Star;
