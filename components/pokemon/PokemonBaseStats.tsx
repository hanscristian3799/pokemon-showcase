"use client"
import React from "react";
import { FaWeightScale, FaStar, FaArrowTrendUp } from "react-icons/fa6";

interface Props {
    title: string;
    statType: "weight" | "height" | "experience";
    value: number;
}

const styles = {
    icon: {
        width: 28,
        height: 28,
    },
};

const renderIcon = (statType: "weight" | "height" | "experience") => {
    if (statType === "weight") {
        return (
            <FaWeightScale
                style={{ width: 28, height: 28, color: "#DC143C" }}
            />
        );
    } else if (statType === "height") {
        return (
            <FaArrowTrendUp
                style={{ width: 28, height: 28, color: "#1E90FF" }}
            />
        );
    } else if (statType === "experience") {
        return <FaStar style={{ width: 28, height: 28, color: "#FFD700" }} />;
    }
    return null;
};

const PokemonBaseStats = ({ title, statType, value }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">{title}</p>
            <div className="flex flex-row items-center gap-2">
                {renderIcon(statType)}
                <p className="text-lg font-medium">{value}</p>
            </div>
        </div>
    );
};

export default PokemonBaseStats;
