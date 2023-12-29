"use client";
import React from "react";

interface Props {
    children: React.ReactNode;
    containerStyle?: string;
    onClick?: () => void;
}

const Card = ({ children, containerStyle, onClick }: Props) => {
    return (
        <div
            className={`bg-white rounded-md border-gray-200 border-[1px] w-fit shadow-md overflow-hidden ${containerStyle}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
