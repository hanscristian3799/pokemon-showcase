import React from "react";

interface Props {
    children: React.ReactNode;
    containerStyle?: string;
}

const Grid = ({ children, containerStyle }: Props) => {
    return <div className={`grid grid-cols-1 ${containerStyle}`}>{children}</div>;
};

export default Grid;
