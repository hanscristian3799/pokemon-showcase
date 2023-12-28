export interface PokemonResponseResult {
    name: string;
    url: string;
}

export interface Pokemon extends PokemonResponseResult {
    id: string;
    image: string;
}

export interface PokemonsResponse {
    count: number;
    results: PokemonResponseResult[];
}