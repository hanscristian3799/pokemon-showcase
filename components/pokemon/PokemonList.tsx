import { API_URL, IMAGE_API_URL } from "@/constants";
import { Pokemon, PokemonsResponse } from "@/types/pokemon";
import React from "react";
import PokemonItem from "./PokemonItem";
import Grid from "../ui/Grid";

const getPokemons = async () => {
    const res = await fetch(`${API_URL}/pokemon?limit=24`, {
        cache: "no-store",
    });
    const pokemonsJson: PokemonsResponse = await res.json();
    const pokemon: Pokemon[] = pokemonsJson.results.map((pokemon) => {
        const id = pokemon.url.split("/").slice(-2)[0];
        return {
            ...pokemon,
            id,
            image: `${IMAGE_API_URL}/${id}.png`,
        };
    });
    return pokemon;
};

const PokemonList = async () => {
    const pokemons = await getPokemons();

    return (
        <Grid containerStyle="p-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
        </Grid>
    );
};

export default PokemonList;
