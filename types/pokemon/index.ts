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

interface PokemonDetailStat {
    base_stat: number;
    stat_name: 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed' | 'accuracy' | 'evasion';
}

export interface PokemonDetail {
    id: number;
    weight: number;
    name: string;
    height: number;
    base_experience: number;
    stats: PokemonDetailStat[];
    abilities: string[];
    held_items: string[];
    moves: string[];
}