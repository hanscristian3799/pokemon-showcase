'use client';
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import React from "react";
import Card from "../ui/Card";
import { useRouter } from "next/navigation";

interface Props {
    pokemon: Pokemon;
}

const PokemonItem = ({ pokemon }: Props) => {
    const router = useRouter();

    return (
        <Card
            containerStyle="flex flex-col items-center cursor-pointer hover:bg-slate-50 transition-all duration-300 active:bg-slate-200 overflow-hidden"
            onClick={() => {
                router.push(`/pokemon/${pokemon.name}`)
            }}
        >
            <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={300}
                height={300}
                quality={25}
            />
            <div className="p-3 bg-main-red w-full text-center">
                <h5 className="capitalize font-semibold text-lg text-white">{pokemon.name}</h5>
            </div>
        </Card>
    );
};

export default PokemonItem;
