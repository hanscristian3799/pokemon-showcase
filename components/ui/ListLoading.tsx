'use client'
import React from "react";
import Grid from "./Grid";
import Card from "./Card";

interface Props {
    type: "grid" | "list";
    count: number;
}

const GridCard = () => {
    return (
        <Card containerStyle="w-full animate-pulse">
            <div className="bg-slate-50 h-[200px] md:h-[150px] lg:h-[200px]"></div>
            <div className="p-2 pt-5 border-t-[1px] border-t-gray-200 bg-white h-[50px]">
                <div className="h-3 bg-slate-100 rounded-xl"></div>
            </div>
        </Card>
    );
};

const ListLoading = ({ type, count = 1 }: Props) => {
    if (type === "grid") {
        return (
            <Grid containerStyle="p-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                {count > 1 ? (
                    [...Array(count)].map((_, index) => <GridCard key={index} />)
                ) : (
                    <GridCard />
                )}
            </Grid>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <p>Loading</p>
        </div>
    );
};

export default ListLoading;
