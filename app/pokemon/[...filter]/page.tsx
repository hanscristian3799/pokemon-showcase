import React from "react";

interface Props {
    params: {
        filter: string[];
    };
}

const PokemonFilter = ({ params: { filter } }: Props) => {
    return (
        <div className="py-4 px-8">
            <h3 className="text-2xl font-bold text-center">PokemonFilter</h3>
            <p className="text-xl font-semibold mb-2">Applied Filter(s)</p>
            <ul>
                {filter.map((f, index) => (
                    <li key={index} className="capitalize font-medium list-disc py-1">{f}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonFilter;
