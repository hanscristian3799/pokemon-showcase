import PokemonBaseStats from "@/components/pokemon/PokemonBaseStats";
import { API_URL, IMAGE_API_URL } from "@/constants";
import { PokemonDetail } from "@/types/pokemon";
import Image from "next/image";
import React from "react";
import {
    FaHeartPulse,
    FaShield,
    FaShieldHeart,
    FaWandMagic,
    FaWandMagicSparkles,
    FaArrowsTurnToDots,
    FaBullseye,
    FaForward,
} from "react-icons/fa6";

interface Props {
    params: {
        name: string;
    };
}

const renderSimpleListItem = (key: number, value: string) => {
    return (
        <div key={key} className="py-2 px-5 bg-main-red rounded-md">
            <p className="capitalize text-white text-center">{value.replace('-', ' ')}</p>
        </div>
    );
};

const getPokemon = async (name: string) => {
    const res = await fetch(`${API_URL}/pokemon/${name}`, {
        cache: "no-store",
    });
    const pokemon = await res.json();
    const transformedPokemonData: PokemonDetail = {
        id: pokemon.id,
        weight: pokemon.weight,
        name: pokemon.name,
        height: pokemon.height,
        base_experience: pokemon.base_experience,
        stats: pokemon.stats.map((stat: any) => ({
            base_stat: stat.base_stat,
            stat_name: stat.stat.name,
        })),
        abilities: pokemon.abilities.map(
            (ability: any) => ability.ability.name
        ),
        held_items: pokemon.held_items.map((item: any) => item.item.name),
        moves: pokemon.moves.map((move: any) => move.move.name),
    };

    return transformedPokemonData;
};

const renderStatIcon = (stat: string) => {
    const style = {
        icon: {
            color: "white",
        },
    };
    if (stat === "hp") {
        return <FaHeartPulse style={style.icon} />;
    } else if (stat === "attack") {
        return <FaWandMagic style={style.icon} />;
    } else if (stat === "special-attack") {
        return <FaWandMagicSparkles style={style.icon} />;
    } else if (stat === "defense") {
        return <FaShield style={style.icon} />;
    } else if (stat === "special-defense") {
        return <FaShieldHeart style={style.icon} />;
    } else if (stat === "speed") {
        return <FaForward style={style.icon} />;
    } else if (stat === "accuracy") {
        return <FaBullseye style={style.icon} />;
    } else if (stat === "evasion") {
        return <FaArrowsTurnToDots style={style.icon} />;
    }
    return null;
};

const PokemonDetail = async ({ params: { name } }: Props) => {
    const pokemon = await getPokemon(name);

    return (
        <div className="py-4">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={`${IMAGE_API_URL}/${pokemon.id}.png`}
                    alt={`Image of ${pokemon.name || "pokemon"}`}
                    width={400}
                    height={400}
                    priority
                    quality={50}
                />
            </div>
            <div className="mx-8">
                <h3 className="text-4xl capitalize mb-5 text-center">
                    {pokemon.name}
                </h3>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-between gap-8 mb-4">
                        <PokemonBaseStats
                            title="Weight(kg)"
                            statType="weight"
                            value={pokemon.weight}
                        />
                        <PokemonBaseStats
                            title="Height(meters)"
                            statType="height"
                            value={pokemon.height}
                        />
                        <PokemonBaseStats
                            title="Base Experience(fight(s))"
                            statType="experience"
                            value={pokemon.base_experience}
                        />
                    </div>
                </div>
                {pokemon.stats && pokemon.stats.length > 0 ? (
                    <div className="mb-4">
                        <p className="text-2xl">Stats</p>
                        <div className="flex flex-row items-center justify-start gap-4">
                            {pokemon.stats.map((pokemon, index) => (
                                <div
                                    key={index}
                                    className="py-2 px-5 bg-main-red rounded-md flex flex-row items-center justify-center gap-2"
                                >
                                    {renderStatIcon(pokemon.stat_name)}
                                    <p className="text-lg text-white text-center">
                                        {pokemon.base_stat}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
                {pokemon.abilities && pokemon.abilities.length > 0 ? (
                    <div className="mb-4">
                        <p className="text-2xl">Abilities</p>
                        <div className="flex flex-row items-center justify-start gap-4">
                            {pokemon.abilities.map((ability, index) =>
                                renderSimpleListItem(index, ability)
                            )}
                        </div>
                    </div>
                ) : null}
                {pokemon.held_items && pokemon.held_items.length > 0 ? (
                    <div className="mb-4">
                        <p className="text-2xl">Held Items</p>
                        <div className="flex flex-row items-center justify-start gap-4">
                            {pokemon.held_items.map((item, index) =>
                                renderSimpleListItem(index, item)
                            )}
                        </div>
                    </div>
                ) : null}
                {pokemon.moves && pokemon.moves.length > 0 ? (
                    <div className="mb-8">
                        <p className="text-2xl">Moves</p>
                        <div className="flex flex-row items-center justify-start flex-wrap gap-4">
                            {pokemon.moves.map((move, index) =>
                                renderSimpleListItem(index, move)
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PokemonDetail;
